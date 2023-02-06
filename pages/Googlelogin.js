import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"

const Googlelogin = () => {
  
    const { data: session } = useSession()

  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
  }
  
  export default Googlelogin