import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import {
  setUsernameValue,
  setPhoneNumberValue,
  setGuestsValue,
  setIsSended,
  resetForm,
  setError,
  setSuccess,
  setIsSubmitting,
} from "../../../../../store/formslice/formSlice";
import Button from "../button/Button";
import "./EsHamadzaynEmForm.scss";

const EsHamadzaynEmForm = ({ handleHidden }) => {
  const dispatch = useDispatch();
  const { usernameValue, phoneNumberValue, guestsValue, isSubmitting } =
    useSelector((state) => state.form);

  const isValidName = (input) => {
    const words = input.trim().split(" ");
    return words.length >= 2 && words[0] !== "" && words[1] !== "";
  };

  const isValidPhoneNumber = (number) => {
    const regex = /^\+374(94|93|91|77|43|98)\d{6}$/;
    return regex.test(number.replace(/[^\d]/g, ""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    dispatch(setIsSubmitting(true));

    if (!isValidName(usernameValue)) {
      dispatch(
        setError(
          "Խնդրում ենք մուտքագրել ձեր անունն ու ազգանունը՝ բաժանված բացատով:"
        )
      );
      dispatch(setIsSubmitting(false));
      return;
    }

    if (!isValidPhoneNumber(phoneNumberValue)) {
      dispatch(setError("Խնդրում ենք մուտքագրել ճիշտ հեռախոսահամար:"));
      dispatch(setIsSubmitting(false));
      return;
    }

    try {
      await axios.post("http://localhost:5000/submit-form", {
        username: usernameValue,
        phoneNumber: phoneNumberValue,
        guests: guestsValue,
      });

      dispatch(setSuccess("Форма успешно отправлена!"));
      dispatch(setError(""));
      dispatch(setIsSended(true));
      dispatch(resetForm());
      handleHidden();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch(setError(error.response.data));
      } else {
        dispatch(setError("Произошла ошибка при отправке формы."));
      }
      dispatch(setSuccess(""));
    } finally {
      dispatch(setIsSubmitting(false));
    }
  };

  return (
    <form className="paper-content" onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        placeholder="Մուտքագրեք ձեր անունը և ազգանունը"
        className="paper-content-username"
        value={usernameValue}
        onChange={(e) => dispatch(setUsernameValue(e.target.value))}
        required
      />
      <InputMask
        mask="+374 (99) 99 99 99"
        maskChar="_"
        className="paper-content-phone"
        id="phoneNumber"
        placeholder="Մուտքագրեք ձեր հեռախոսահամարը"
        value={phoneNumberValue}
        onChange={(e) => dispatch(setPhoneNumberValue(e.target.value))}
        required
      >
        {(inputProps) => <input {...inputProps} type="tel" />}
      </InputMask>
      <input
        type="number"
        className="paper-content-guests"
        placeholder="Մուտքագրեք հյուրերի թիվը"
        value={guestsValue}
        onChange={(e) => dispatch(setGuestsValue(e.target.value))}
        required
      />
      <div className="button-div">
        <Button type="submit" disabled={isSubmitting}>
          {/* Отправить */}
        </Button>
      </div>
    </form>
  );
};

export default EsHamadzaynEmForm;
