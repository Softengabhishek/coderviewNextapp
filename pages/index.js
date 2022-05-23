import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import TypeAnimation from 'react-type-animation'
import React , { omponent} from 'react'

export default function Home() {
  return <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 d-flex  align-items-center" >
        <h1>I'm </h1>
        <br/>
         
        <TypeAnimation
          cursor={true}
          sequence={[
            ' Abhishek Gupta',
            3000,
            "Fullstack web Developer ",
            3000,
            'Programmer',
            3000
          ]}
          wrapper="h3"
          repeat={Infinity}
          className = "text-primary"
        />
        </div>
        <div className="col-lg-6 col-sm-12" >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium obcaecati doloremque in maiores nam qui suscipit, quaerat incidunt error est sed ipsam molestias voluptatibus illo corrupti ab enim, impedit libero mollitia minima. Eligendi velit, impedit aspernatur sunt dolorum non rerum quo architecto eos ducimus illum officiis ut quisquam omnis sequi quaerat voluptate, veniam consectetur? Nihil placeat fugiat dolore maiores unde, labore iure aliquam, deserunt alias beatae temporibus. Vitae autem eos quos a, pariatur ullam ipsam? Nostrum ut ratione repellat alias saepe numquam, explicabo doloribus voluptate laboriosam quidem sit possimus cum dicta inventore cupiditate itaque earum quibusdam aperiam. Aspernatur porro, animi repudiandae vel qui rerum error ab at impedit recusandae commodi in eum eos inventore consequatur tenetur laboriosam blanditiis quis? Commodi, rerum. In alias quo aut doloremque incidunt ea sed minus harum beatae. Facilis consequatur velit, cumque deserunt quos inventore. Ipsa cumque itaque culpa pariatur deleniti expedita sed quas neque repudiandae, optio, natus nesciunt. Ab laborum aut iste ratione cupiditate iure harum deleniti, quo numquam repellendus mollitia cum nihil assumenda consectetur voluptatum voluptate tempore dolore! Corrupti harum repellendus, beatae, adipisci blanditiis quibusdam ratione error obcaecati doloremque nobis, minima ipsam earum reprehenderit sit architecto fugiat officia saepe qui. Obcaecati, id ducimus.
          </p>
        </div>
      </div>
    </div>

  </>
}
