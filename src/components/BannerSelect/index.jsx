import React, { useState } from "react";
import { TreeSelect } from "antd";
import { treeData } from "../../constants/banners";

const initialSelect = { w: 0, h: 0, type: "" };
const BannerSelect = ({ onSelect }) => {
  const [value, setValue] = useState();

  const onSelected = (_, node) => {
    const { value, title } = node;
    const type = value.split("x")[0];
    const splittedTitle = title.split("x");
    onSelect({ w: splittedTitle[0], h: splittedTitle[1], type });
    setValue(title);
    console.log("=========================================");
    console.log(`WE GOT: `, title);
    console.log("=========================================");
  };

  return (
    <div>
      <TreeSelect
        showSearch
        style={{ maxWidth: "400px", minWidth: "200px" }}
        value={value}
        dropdownStyle={{ maxHeight: "90vh", overflow: "auto" }}
        placeholder="Please select"
        allowClear
        onClear={() => {
          onSelect(initialSelect);
          setValue();
        }}
        onSelect={onSelected}
        treeData={treeData}
        listHeight={700}
        treeDefaultExpandAll
      />
    </div>
  );
};

export default BannerSelect;
