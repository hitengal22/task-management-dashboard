import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <main className="p-4">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Home Page</h2>
          <Card
            title="Card Title"
            description="This is a description of the card."
          />
          <Button text="Click Me" onClick={() => alert('Button Clicked!')} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
