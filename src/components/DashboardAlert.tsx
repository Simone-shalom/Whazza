"use client";
import React from "react";
import { Alert, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import Draggable from "react-draggable";

export const DashboardAlert = () => {
  return (
    <Draggable>
      <Alert className=" bg-transparent border-0 font-bold text-black  max-w-xs  z-50">
        <Terminal className="h-4 w-4" />
        <AlertTitle className="text-xl font-bold">Drag me!</AlertTitle>
      </Alert>
    </Draggable>
  );
};
