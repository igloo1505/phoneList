import M from "materialize-css/dist/js/materialize.min";
import Axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const validateNumber = phone => {
  let ph = "";

  let numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (var i = 0; i < phone.length; i++) {
    if (numArr.includes(phone[i])) {
      ph = ph.concat(phone[i]);
    }
  }
  phone = Number(ph);
  return phone;
};
export const postContact = async contact => {
  console.log("posting");
  try {
    const res = await Axios.post("/list", contact, config);

    console.log(res);
    if (res.status === 200) {
      M.toast({
        html: `Thank you, you were successfully added to the phone list.`
      });
    } else if (res.status === 500) {
      M.toast({
        html: "Ah shit. Something went wrong."
      });
    }
  } catch (error) {
    M.toast({
      html: "Ah shit. Something went wrong."
    });
    console.error(error.message);
  }
};

export const getContacts = async () => {
  console.log("getContacts called");
  const res = await fetch("/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const contacts = await res.json();
  console.log(contacts);
  console.log(contacts.length);
  return contacts;
};
export const getDatalist = contacts => {
  let uniqueDataList = [];
  for (var i = 0; i < contacts.length; i++) {
    if (uniqueDataList.includes(contacts[i].meeting) === false) {
      uniqueDataList.push(contacts[i].meeting);
    }
  }
  return uniqueDataList;
};
