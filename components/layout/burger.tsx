import '@/styles/burger.scss'

function Burger({mobileNavOpen}: {mobileNavOpen: boolean}) {

  return (
    <div className={`icon-wrapper ${mobileNavOpen ? 'active' : ''}`}>
      <div className="menu-icon"/>
    </div>
  );
}

export default Burger;