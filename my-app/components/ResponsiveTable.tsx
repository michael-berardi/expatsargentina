"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Column {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
}

interface ResponsiveTableProps {
  columns: Column[];
  data: Record<string, React.ReactNode>[];
  caption?: string;
}

export function ResponsiveTable({ columns, data, caption }: ResponsiveTableProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (data.length === 0) return null;

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          {caption && <caption className="text-left font-semibold mb-2">{caption}</caption>}
          <thead>
            <tr className="border-b-2 border-border">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 font-semibold text-left ${
                    col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : ""
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-border/50 ${
                  idx % 2 === 1 ? "bg-muted/30" : ""
                } hover:bg-muted/50 transition-colors`}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`py-3 px-4 ${
                      col.align === "right"
                        ? "text-right"
                        : col.align === "center"
                        ? "text-center"
                        : ""
                    }`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {caption && <p className="font-semibold mb-3">{caption}</p>}
        
        {/* Card Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} of {data.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex((prev) => Math.min(data.length - 1, prev + 1))}
            disabled={currentIndex === data.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Current Card */}
        <div className="bg-card border rounded-lg p-4 space-y-3">
          {columns.map((col) => (
            <div key={col.key} className="flex justify-between items-start gap-4">
              <span className="text-sm text-muted-foreground font-medium shrink-0">
                {col.header}
              </span>
              <span
                className={`text-sm ${
                  col.align === "right"
                    ? "text-right"
                    : col.align === "center"
                    ? "text-center"
                    : "text-right"
                }`}
              >
                {data[currentIndex][col.key]}
              </span>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-4">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Simple data table with horizontal scroll for mobile
export function SimpleDataTable({ 
  columns, 
  data, 
  caption 
}: ResponsiveTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <table className="w-full text-sm min-w-[600px] md:min-w-0">
        {caption && <caption className="text-left font-semibold mb-2 text-base">{caption}</caption>}
        <thead>
          <tr className="border-b-2 border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`py-3 px-2 md:px-4 font-semibold text-left whitespace-nowrap ${
                  col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : ""
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-border/50 ${
                idx % 2 === 1 ? "bg-muted/30" : ""
              }`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-3 px-2 md:px-4 whitespace-nowrap ${
                    col.align === "right"
                      ? "text-right"
                      : col.align === "center"
                      ? "text-center"
                      : ""
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
