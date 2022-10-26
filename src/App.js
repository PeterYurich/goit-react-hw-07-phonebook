import ContactForm from "./components/ContactForm/ContactForm";
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import css from './components/App.module.scss'

const App = () =>
(
  <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm ></ContactForm>
    <h2>Contacts</h2>
    <Filter ></Filter>
    <ContactList></ContactList>
  </div>
)

export default App
