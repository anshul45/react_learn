
const Title = () => (
    <a href='/'>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFc7rUi0nyb4DN0uyR7jUOuiHbCW13TirRWGsmI66qA&s" alt='food_villa title' className='logo'/>
     </a>
)

const Header = () => {
     return (

                     <div className='header'>
                             <Title />
                             <div className='nav-items'>
                                     <ul>
                                             <li>Home</li>
                                             <li>About</li>
                                             <li>Contact</li>
                                             <li>Cart</li>
                                     </ul>
                             </div>
                     </div>
             )
}

export default Header;