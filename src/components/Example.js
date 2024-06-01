import "./Example.css"
import { useState } from "react"

const Example = () => {
  console.log("refresh")
  const [title, setTitle] = useState("Můj první title")
  const [buttonText, setButtonText] = useState("Změnit text tlačítka")

  // Změna textu
  const buttonHandler = () => {
    setTitle("Nový text v titlu")
  }

  // Změna textu 2
  const button2Handler = () => {
    setTitle("Druhý nový text v titlu")
  }

  // Přidání prázdného stringu
  const deleteAll = () => {
    setTitle("")
  }

  // Změna textu tlačítka
  const buttonChangeText = () => {
    setButtonText("Nový text tlačítka")
  }

  return <div className="text-btn-changer">
    <h2>{title}</h2>
    <button onClick={buttonHandler}>Změnit title</button>
    <button onClick={button2Handler}>Opět změnit title</button>
    <button onClick={deleteAll}>Vymazat vše</button>
    <button onClick={buttonChangeText}>{buttonText}</button>
  </div>
}

export default Example