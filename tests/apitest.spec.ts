import {test,expect} from '@playwright/test';

test('API get Request', async ({request}) => {
    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    const responseObject = await response.json();
    console.log(responseObject);
    expect(responseObject.tags[0]).toEqual('Test');
    expect(responseObject.tags).toHaveLength(10);
});

test('API Post Request', async ({request}) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/',
    {
        headers: {
            Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0Njc5NH0sImlhdCI6MTc3MTIyMzY0MSwiZXhwIjoxNzc2NDA3NjQxfQ.0ZSn9ctP97Cvihlmdsz9PeFnAQ0x-rI1CgNyjaMN2Ew'},
    data:{
            "article":{"title":"Check","description":"testing","body":"test","tagList":[]}
        }
    })
     const responseObject = await response.json();
     console.log(responseObject);
  
});

