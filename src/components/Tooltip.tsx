import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  trigger: "hover" | "click";
}

type Position = "top" | "bottom" | "left" | "right";

const Tooltip: React.FC<TooltipProps> = ({ content, children, trigger }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<Position>("bottom");
  const [adjustment, setAdjustment] = useState({ top: 0, left: 0 });

  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const adjustTooltipPosition = (tooltipRect: DOMRect, buttonRect: DOMRect) => {
    const tooltipAdjustment = { top: 0, left: 0 };
    const tooltipWidth = tooltipRect?.width ?? 100;
    const tooltipHeight = tooltipRect?.height ?? 10;

    if (position === "bottom") {
      tooltipAdjustment.top += 50;
      tooltipAdjustment.left = buttonRect.left;

      if (buttonRect.left + tooltipWidth) {
        tooltipAdjustment.left = buttonRect.right - tooltipWidth;
      }
    }

    if (position === "top") {
      tooltipAdjustment.top = buttonRect.top - tooltipHeight;
      tooltipAdjustment.left = buttonRect.right - tooltipWidth;

      if (buttonRect.right - tooltipWidth < 0) {
        tooltipAdjustment.left = buttonRect.left;
      }
    }

    if (position === "left") {
      tooltipAdjustment.top = buttonRect.top;
      tooltipAdjustment.left = buttonRect.left - tooltipWidth;

      if (buttonRect.left - tooltipWidth < 0) {
        tooltipAdjustment.left = buttonRect.right;
      }
    }

    if (position === "right") {
      tooltipAdjustment.top = buttonRect.top;
      tooltipAdjustment.left = buttonRect.right;

      if (buttonRect.right + tooltipWidth) {
        tooltipAdjustment.left = buttonRect.left - tooltipWidth;
      }
    }

    setAdjustment({
      ...tooltipAdjustment,
      left:
        trigger === "hover"
          ? tooltipAdjustment.left + 150
          : tooltipAdjustment.left + 50,
    });
  };

  const showTooltip = () => {
    if (buttonRef.current || tooltipRef.current) {
      const buttonRect = buttonRef?.current?.getBoundingClientRect() as DOMRect;
      const tooltipRect =
        tooltipRef?.current?.getBoundingClientRect() as DOMRect;

      const spaceAbove = buttonRect.top;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceLeft = buttonRect.left;
      const spaceRight = window.innerWidth - buttonRect.right;

      let newPosition: Position = "bottom";

      const tooltipHeight = tooltipRect?.height ?? 0;
      const tooltipWidth = tooltipRect?.width ?? 0;

      if (spaceBelow >= tooltipHeight) {
        newPosition = "bottom";
      } else if (spaceAbove >= tooltipHeight) {
        newPosition = "top";
      } else if (spaceRight >= tooltipWidth) {
        newPosition = "right";
      } else if (spaceLeft >= tooltipWidth) {
        newPosition = "left";
      }

      setPosition(newPosition);
      adjustTooltipPosition(tooltipRect, buttonRect);
    }
    setVisible((prevState) => !prevState);
  };

  const hideTooltip = () => setVisible(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        hideTooltip();
      }
    };
    if (trigger === "click") {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [trigger]);

  return (
    <div className="tooltip-container">
      <button
        ref={buttonRef}
        className="tooltip-trigger"
        onClick={trigger === "click" ? showTooltip : undefined}
        onMouseEnter={trigger === "hover" ? showTooltip : undefined}
        onMouseLeave={trigger === "hover" ? hideTooltip : undefined}
        aria-haspopup="true"
        aria-expanded={visible ? "true" : "false"}
        aria-label="Show Tooltip"
      >
        {children}
      </button>
      {visible && (
        <div
          ref={tooltipRef}
          className={`tooltip-box tooltip-${position}`}
          role="tooltip"
          style={adjustment}
        >
          <p className="tooltip-content">{content}</p>
          {trigger === "click" && (
            <button className="tooltip-close" onClick={hideTooltip}>
              ×
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
