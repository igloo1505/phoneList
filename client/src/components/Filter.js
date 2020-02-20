import React, { useState } from "react";

const Filter = ({ dataList, setFiltered, contacts }) => {
  const [search, setSearch] = useState("");

  const onChange = e => {
    // setSearch(e.target.value);
    let v = e.target.value;
    const regex = new RegExp(v, "gi");
    let f = contacts.filter(contact => contact.meeting.match(regex));
    setFiltered(f);
    console.log(f);
  };

  return (
    <form className="col s12" style={{ padding: "30px" }}>
      <input
        type="text"
        id="filter"
        placeholder="Filter By Meeting"
        list="meetingList"
        onChange={onChange}
      />
      <label htmlFor="filter">Filter By Meeting</label>
      <datalist id="meetingList">
        {dataList.map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist>
    </form>
  );
};

export default Filter;
