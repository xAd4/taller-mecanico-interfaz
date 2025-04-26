export const handleInputChangeCheckbox = (e) => {
  const { name, type, checked } = e.target;
  // Para checkboxes usamos 'checked', de lo contrario 'value'
  const value = type === "checkbox" ? checked : e.target.value;
  setFormData({
    ...formData,
    [name]: value,
  });
};
