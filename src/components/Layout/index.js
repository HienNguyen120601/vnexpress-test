import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'

function Defaultlayout({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            <div className='container'>
                {children}
            </div>

            <Footer />
        </div>
    )

}
export default Defaultlayout