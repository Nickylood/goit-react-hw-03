
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import data from './components/json/contact.json'


// считвает значение по ключу с localStorage
const localStorRead = () => {
  const contacts = window.localStorage.getItem("cards");
  return contacts !== null ? JSON.parse(contacts) : data;
};

export default function App() {
  const [cards, setCards] = useState(localStorRead);
  const [filter, setFilter] = useState("");

  const filteredCard = cards.filter((card) =>
    card.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addCard = (newCard) => {
    setCards((prevCard) => {
      return [...prevCard, newCard];
    });
  };

  const deleteCard = (cardId) => {
    setCards((prevCard) => {
      return prevCard.filter((card) => card.id !== cardId);
    });
  };
  
  useEffect(() => {
    try {
      localStorage.setItem("cards", JSON.stringify(cards));
    } catch (error) {
      console.error("Error storing cards or filter in localStorage:", error);
    }
  }, [cards]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addCard} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredCard} onDelete={deleteCard} />
    </div>
  );
}
