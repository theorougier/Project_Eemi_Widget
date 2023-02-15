import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useWidgetButton from "../hooks/useWidgetButton";
export default function WidgetButton() {
  const { handleCreateMaps } = useWidgetButton();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add Widget
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={handleCreateMaps}
          href=""
        >
          Map
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log("non")} href="" disabled>
          List
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => console.log("peut être")}
          href=""
          disabled
        >
          Weather
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
