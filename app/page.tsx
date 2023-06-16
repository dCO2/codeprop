"use client";
import Editor from './editor'
import Head from 'next/head'
import { useState, useCallback } from 'react'

export default function Home() {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')
  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <div>
      <Head>
        <meta name="description" content="Paste code; Syntax-highlight; Select spot-light; Share" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Editor initialDoc={doc} onChange={handleDocChange} />
        </div>
      </div>
    </div>
  )
}
