import React, { useState, useEffect, memo } from 'react';
import styled from "styled-components";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import axios from "axios";
import createStrapi from 'strapi';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/marcinhojazz/repos")
      .then((res) => setRows(res.data));
      .catch(e => strapi.notification.error("Ops...Github API limit exceeded")) // 60 calls per hour on Github
  });

  const headers = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Description',
      value: 'description',
    },
    {
      name: 'Url',
      value: 'html_url',
    },
  ];

  return (
    <Wrapper>
      <Header 
        title={{ label: 'Meus repositórios no Github' }}
        content="Lista de repositórios:"
      />
      <Table headers={headers} rows={rows}/>
      
        
    </Wrapper>
  );
};

export default memo(HomePage);
