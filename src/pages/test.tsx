/** @jsxImportSource theme-ui **/
import { Themed, Flex } from 'theme-ui'
import { useStateValue } from '../state/state'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
import BottomSpace from '../components/BottomSpace'

const Home = () => {
  const [{ dapp }] = useStateValue()
  const router = useRouter()
  const [tab, setTab] = useState(router.query.tab)

  return (
    <Layout>
      <main>
        <div className="contents animate">
          
        </div>
      </main>
    </Layout>
  )
}

export default Home
