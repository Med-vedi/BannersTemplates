import React, { useEffect, useState } from "react";
import { TreeSelect } from "antd";
import { treeData } from "../../constants/banners";

const initialSelect = { w: 0, h: 0, type: "" };
const BannerSelect = ({ onSelect }) => {
  const [value, setValue] = useState();

  const onSelected = (_, node, extra) => {
    const { title } = node;
    onSelect(node, extra);
    setValue(title);
  };

  useEffect(() => {
    onSelect({
      value: "vcbx300x600",
      title: "300x600",
    });
  }, []);

  return (
    <div>
      <TreeSelect
        defaultValue={{
          value: "vcbx300x600",
          title: "300x600",
        }}
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
