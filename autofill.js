(function autofillJBC() {
  const form = document.getElementById('applicationForm');
  if (!form) {
    alert("Form not found. Make sure you're on the correct page.");
    return;
  }

  const setVal = (name, value) => {
    const el = form.querySelector(`[name="${name}"]`);
    if (el) el.value = value;
  };

  // === Basic Info ===
  setVal("name", "");
  setVal("name_bn", "");
  setVal("father", "");
  setVal("father_bn", "");
  setVal("mother", "");
  setVal("mother_bn", "");
  setVal("dob", "");
  setVal("religion", "1"); // Example: Islam
  setVal("gender", "Male");
  setVal("marital_status", "Single");

  // === National ID Section ===
  const nidSelect = form.querySelector('[name="nid"]');
  if (nidSelect) {
    nidSelect.value = "1";
    if (typeof onChangeId === "function") {
      onChangeId(nidSelect, "nationalIdElm");
    }
  }
  setTimeout(() => {
    setVal("nid_no", "");
  }, 300);

  // === Birth Registration Section ===
  const bregSelect = form.querySelector('[name="breg"]');
  if (bregSelect) {
    bregSelect.value = "1";
    if (typeof onChangeId === "function") {
      onChangeId(bregSelect, "bregElm");
    }
  }
  setTimeout(() => {
    setVal("breg_no", "");
  }, 300);

  // === Passport Section ===
  const passSelect = form.querySelector('[name="passport"]');
  if (passSelect) {
    passSelect.value = "1";
    if (typeof onChangeId === "function") {
      onChangeId(passSelect, "passId");
    }
  }
  setTimeout(() => {
    setVal("passport_no", "");
  }, 300);

  // === Contact Info ===
  setVal("mobile", "");
  setVal("confirm_mobile", "");
  setVal("email", "");

  // === Quota and Departmental Status ===
  setVal("quota", "8"); // Not Applicable
  setVal("dep_status", "5"); // Not Applicable

  // === Present Address ===
  setVal("present_careof", "");
  setVal("present_village", "");
  setVal("present_post", "");
  setVal("present_postcode", "");

  // District + Upazila
  const district = form.querySelector('[name="present_district"]');
  if (district) {
    district.value = "32"; // Example: Barishal
    if (typeof onChangeDistrict === "function") {
      onChangeDistrict(district, 'present_upazila');
    }
  }

  setTimeout(() => {
    const upazila = form.querySelector('[name="present_upazila"]');
    if (upazila) {
      for (const option of upazila.options) {
        if (option.text.includes("Patharghata")) {
          upazila.value = option.value;
          break;
        }
      }
    }
  }, 500);

  alert("Form autofilled! Please review and upload your photo/signature manually.");
})();
