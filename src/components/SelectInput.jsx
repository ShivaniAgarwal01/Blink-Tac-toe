// src/components/SelectInput.js
import React from 'react';

function SelectInput({ label, value, onChange, options, disabledOptions }) {
  return (
    <div className="my-4">
      <label className="block text-lg mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 rounded-md text-black bg-[#d8d8d8] w-64"
      >
        <option value="" disabled hidden>
          Select a category
        </option>
        {Object.keys(options).map((category) => (
          <option
            key={category}
            value={category}
            disabled={disabledOptions.includes(category)}
            className="bg-[#d8d8d8]"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} — {options[category].join(" ")}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
