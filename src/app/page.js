'use client'

import { useState } from 'react'
import Image from 'next/image'
import '@style/home.css'

export default function Home() {

  const [isSimpan, setSimpan] = useState("");
  const [nama, setNama] = useState("Andrean Chalvari Lambi");

  function handlerInputNama(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();
    setSimpan(event.target.value);
  }
  function handlerSubmit(event) {
    // Prevent the browser from reloading the page
    setNama(isSimpan);
  }
  function handlerKeyEnter(e){
    e.preventDefault
    if (e.key === 'Enter'){
      setSimpan(e.target.value)
      setNama(isSimpan);
    }
  }


  return (
    <>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/DSC00654.jpg"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211016</p>
            <p>Pemrograman Web</p>

            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
            <input 
              name="input-nama"
              type="text"
              placeholder="Tuliskan namamu.."
              onChange={handlerInputNama}
              onKeyDown={handlerKeyEnter}
            />
          <div className='cta-button' onClick={handlerSubmit}>
              <p>Ganti Nama</p>
          </div>
        </div>
      </div>
    </>
  )
}