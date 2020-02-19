import M from "materialize-css/dist/js/materialize.min";
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
  const res = await fetch("/list", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res;
  console.log(data.status);
  if (data.status === 200) {
    M.toast({
      html: `Thank you, you were successfully added to the phone list.`
    });
  } else if (data.status === 500) {
    M.toast({
      html: "Ah shit. Something went wrong."
    });
  }
  console.log(data);
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
