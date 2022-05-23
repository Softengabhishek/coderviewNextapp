import '../styles/globals.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return <>
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">coder-<span className='text-primary'>view</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link href="/"><a className="nav-link  active" aria-current="page" >Home</a></Link>
            <Link href="/about"><a className="nav-link" >About</a></Link>
            <Link href="/service"><a className="nav-link" >Services</a></Link>
            <Link href="/contact"><a className="nav-link">Contact</a></Link>
          </div>
        </div>
      </div>
    </nav>
    <Component {...pageProps} />
  </>
}

export default MyApp
