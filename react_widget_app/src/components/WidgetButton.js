import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import useWidgetButton from "../hooks/useWidgetButton";
export default function WidgetButton({address}) {
const {maps} = useWidgetButton()


  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add Widget
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => document.getElementById('widget-content').appendChild(maps)} href="">Map</Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('non')} href="" disabled>List</Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('peut être')} href="" disabled>Weather</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
