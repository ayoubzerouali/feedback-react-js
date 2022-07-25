function Header() {
    const isThere = true
  return (
    <header className="App-header">
         {isThere ? <div>Hola is here</div>:<p>Hole is not here</p>}
    </header>
  )
}

export default Header
