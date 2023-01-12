import React, { useState } from "react";
import BannerSelect from "../BannerSelect";
import "./style.scss";
import { Switch } from "antd";
import { Radio, Space } from "antd";
import { useEffect } from "react";

const BannerOptions = ({ onSelect, handleWarnPlugChange, settingsHandler }) => {
  const [selectedPlug, setPlug] = useState("");
  const [isSwitch, setSwitch] = useState(false);

  const onSwitchChange = (checked) => {
    setSwitch(checked);
    if (!checked) {
      return setPlug("");
    }
    setPlug("not_medicine");
  };

  const onRadioChange = (e) => {
    setPlug(e.target.value);
  };

  useEffect(() => {
    handleWarnPlugChange(selectedPlug);
  }, [selectedPlug]);

  return (
    <div className="banner-options">
      <BannerSelect onSelect={onSelect} />
      <div className="banner-options__advanced">
        <label>Disclaimer Plug</label>
        <Switch checked={isSwitch} onChange={onSwitchChange} />

        {isSwitch && (
          <Radio.Group
            value={selectedPlug}
            onChange={onRadioChange}
            disabled={!isSwitch}
          >
            <Space direction="vertical">
              <Radio value="not_medicine">БАДы</Radio>
              <Radio value="over_11_age">Детское питание</Radio>
              <Radio value="get_doctor_consulting">Мед. противопоказания</Radio>
              <Radio value="weapon_warning">Игр. оружие</Radio>
            </Space>
          </Radio.Group>
        )}

        <label>Carousel</label>
        <Switch
          defaultChecked
          onChange={(checked) => settingsHandler({ hideCarousel: !checked })}
        />

        <label>Bestseller</label>
        <Switch
          defaultChecked
          onChange={(checked) => settingsHandler({ hideBest: !checked })}
        />
        <label>Rating</label>
        <Switch
          defaultChecked
          onChange={(checked) => settingsHandler({ hideRating: !checked })}
        />
      </div>
    </div>
  );
};

export default BannerOptions;
