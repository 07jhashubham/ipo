import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("finance");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="finance">Financial statements</ToggleButton>
      <ToggleButton value="analysis">Analysis & Rating</ToggleButton>
    </ToggleButtonGroup>
  );
}
