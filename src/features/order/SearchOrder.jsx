import React, { useState } from 'react';
import {Form, Navigate} from "react-router-dom"

export default function SearchOrder() {
    const [query,setQuery]=useState("");

     function handleSubmit(e){
        e.preventDefault();
        if(!query) return;
        Navigate(`/order/${query}`);
        setQuery("");

     }
  return (
    <Form onSubmit={handleSubmit}>
      <input
      placeholder='search order #'
      value={query}
      onChange={e=>{setQuery(e.target.value)}}
      
      />
      
      
    </Form>
  );
}
