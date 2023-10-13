import React from "react";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
const grotesk = Space_Grotesk({ subsets: ["latin"] });
function Form() {
  const [creditNumber, setCreditNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameError, setNameError] = useState("");
  const [cardError, setCardError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [dateError, setDateError] = useState("");
  const date = new Date();
  const currentYear = date.getFullYear();

  const onChangeNumber = (e) => {
    setCreditNumber(
      e.target.value
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
  };

  const onYearChange = (e) => {
    if (e.target.value < date.getFullYear().toString().substring(2)) {
      setDateError(`Year cannot be before ${currentYear}`);
    } else {
      setDateError("");
    }
    setYear(e.target.value);
  };
  const onFormSubmit = (e) => {
    let checkField = false;
    const inputCard = document.getElementById("cardInput");
    const inputName = document.getElementById("nameInput");
    const inputMonth = document.getElementById("monthInput");
    const inputYear = document.getElementById("yearInput");
    const inputCvc = document.getElementById("cvcInput");
    const formEl = document.getElementById("form");
    const completeEl = document.getElementById("complete");
    if (name.length <= 0) {
      setNameError("Can't be blank");
      inputName.classList.add("border-error-red");
      checkField = true;
    } else {
      setNameError("");
      inputName.classList.remove("border-error-red");
      checkField = false;
    }

    if (creditNumber.length <= 0) {
      setCardError("Can't be blank");
      inputCard.classList.add("border-error-red");
      return checkField = true;
    } else if (creditNumber.length !== 19) {
      setCardError("Card number must be a 16 digit number.");
      inputCard.classList.add("border-error-red");
      return checkField = true;
    } else {
      setCardError("");
      inputCard.classList.remove("border-error-red");
      checkField = false;
    }

    if (month.length <= 0) {
      setDateError("Can't be blank");
      inputMonth.classList.add("border-error-red");
      checkField = true;
    } else if (month.valueOf == "0") {
      setDateError("Month cannot be 0");
      checkField = true;
    } else {
      setDateError("");
      inputYear.classList.remove("border-error-red");
      inputMonth.classList.remove("border-error-red");
      checkField = false;
    }
    if (year.length <= 0) {
      setDateError("Can't be blank");
      inputYear.classList.add("border-error-red");
      checkField = true;
    } else {
      setDateError("");
      inputYear.classList.remove("border-error-red");
      checkField = false;
    }
    if (cvc.length <= 0) {
      setCvcError("Can't be blank");
      inputCvc.classList.add("border-error-red");
      checkField = true;
    } else {
      inputCvc.classList.remove("border-error-red");
      setCvcError("");
      checkField = false;
    }
    if (!checkField) {
      formEl.classList.add("hidden");
      completeEl.classList.remove("hidden");
      completeEl.classList.add("flex");
    }
    
  };
  const onContinue = () =>{
    setCardError("");
    setCreditNumber("");
    setDateError("");
    setCvcError("");
    setCvc("");
    setMonth("");
    setYear("");
    setName("");
    setNameError("");
    const formEl = document.getElementById("form");
    const completeEl = document.getElementById("complete");
    formEl.classList.remove("hidden");
    completeEl.classList.add("hidden");
    completeEl.classList.remove("flex");
  }
  return (
    <main
      className={`flex flex-col h-screen w-screen ${grotesk.className} overflow-hidden lg:flex-row`}
    >
      <div
        className={
          "flex flex-col h-[40%] bg-cover bg-main-desktop bg-no-repeat lg:w-1/3 lg:h-full"
        }
      >
        <div className="flex flex-col h-full justify-start items-center p-4 space-y-4 lg:justify-center lg:items-start">
          <div className="absolute rounded-lg bg-contain bg-no-repeat bg-card-front w-[300px] h-44 z-10 mt-28 lg:h-64 lg:relative lg:w-[450px] lg:ml-12">
            <img
              src="/card-logo.svg"
              alt="logo"
              className="p-6 w-24 h-22 lg:w-36 lg:h-26 lg:p-8"
            />
            <p className="text-lg text-white pl-6 pb-6 font-medium tracking-widest lg:text-2xl lg:pt-8 lg:pl-8">
              {creditNumber.length > 0 ? creditNumber : "0000 0000 0000 0000"}
            </p>
            <section className="flex justify-between px-6 lg:px-8">
              <p className="text-sm text-white font-thin uppercase lg:text-md">
                {name ? name : "Jane Appleseed"}
              </p>
              <p className="text-sm text-white font-thin lg:text-md">
                {month.length > 0 ? month : "MM"}/
                {year.length > 0 ? year : "YY"}
              </p>
            </section>
          </div>
          <div className="absolute rounded-lg bg-contain bg-no-repeat bg-card-back w-[300px] h-44 ml-14 lg:h-64 lg:relative lg:w-[450px] lg:ml-32">
            <p className="absolute text-sm right-10 top-[4.5rem] text-white lg:right-14 lg:top-[6.8rem] lg:text-md">
              {cvc.length > 0 ? cvc : "000"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-center lg:items-center ">
        <div
          id="complete"
          className="hidden flex-col justify-center items-center self-center w-96 h-96 space-y-6"
        >
          <img src="/icon-complete.svg" alt="complete" className="w-28 h-28 " />
          <h1 className="uppercase font-bold text-2xl text-very-dark-violet tracking-widest text-center">
            Thank you!
          </h1>
          <p className="text-dark-grayish-violet text-center">
            We've added your card details
          </p>
          <button
            type="submit"
            onClick={()=> onContinue()}
            className="w-full h-14 bg-very-dark-violet rounded-lg text-white text-lg lg:w-96"
          >
            Continue
          </button>
        </div>
        <div
          id="form"
          className="flex flex-col gap-4 self-center w-[80%] lg:items-center"
        >
          <div className="flex flex-col">
            <span className="text-very-dark-violet tracking-wide">
              CARDHOLDER NAME
            </span>
            <input
              value={name}
              id="nameInput"
              className="w-auto h-12 border focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent  rounded-lg text-very-dark-violet p-4 lg:w-96"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
            />
            <span
              id="error"
              className="text-xs font-bold text-error-red mt-2"
              aria-live="polite"
            >
              {nameError ?? nameError}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-very-dark-violet tracking-wide">
              CARD NUMBER
            </span>
            <input
              id="cardInput"
              className="w-auto h-12 border focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent rounded-lg text-very-dark-violet p-4 lg:w-96"
              placeholder="e.g. 1234 5678 9123 0000"
              type="text"
              maxLength="19"
              required
              value={creditNumber}
              onChange={(e) => onChangeNumber(e)}
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
            <span
              id="error"
              className="text-xs font-bold text-error-red mt-2"
              aria-live="polite"
            >
              {cardError ?? cardError}
            </span>
          </div>
          <div className="space-y-2">
            <span className="text-very-dark-violet tracking-widest">
              EXP. DATE (MM/YY)
            </span>
            <span className="text-very-dark-violet tracking-wide ml-4 lg:ml-6">
              CVC
            </span>
            <div className="flex flex-row gap-2 w-96">
              <div>
                <div className="flex flex-row space-x-3">
                  <input
                    id="monthInput"
                    className="w-20 h-12 border focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent rounded-lg text-very-dark-violet p-4"
                    placeholder="MM"
                    inputMode="numeric"
                    required
                    maxLength={2}
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <input
                    id="yearInput"
                    className="w-20 h-12 border focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent rounded-lg mr-2 text-very-dark-violet p-4 lg:mr-4"
                    placeholder="YY"
                    maxLength={2}
                    inputMode="numeric"
                    value={year}
                    onChange={(e) => onYearChange(e)}
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <span
                  id="error"
                  className="relative text-xs font-bold text-error-red mt-2"
                  aria-live="polite"
                >
                  {dateError ?? dateError}
                </span>
              </div>

              <div>
                <input
                  id="cvcInput"
                  className="w-48 h-12 border focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent rounded-lg text-very-dark-violet p-4 "
                  placeholder="e.g. 123"
                  maxLength={3}
                  inputMode="numeric"
                  onChange={(e) => setCvc(e.target.value)}
                  value={cvc}
                />
                <span
                  id="error"
                  className="text-xs font-bold text-error-red mt-2"
                  aria-live="polite"
                >
                  {cvcError ?? cvcError}
                </span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-auto h-14 bg-very-dark-violet rounded-lg text-white text-lg lg:w-96"
            onClick={(e) => onFormSubmit(e)}
          >
            Confirm
          </button>
        </div>

        <footer className="flex relative bottom-0 justify-center text-xs mb-4 mt-12 lg:absolute lg:mt-0">
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Emre Kalfa</a>.
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Form;
