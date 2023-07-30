import React from 'react'

function Home({abcd}) {
    
  return (
    <div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

<div class="k2-author">
  <image class="author-pic" src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" alt="Author bio" width="150" height="150" />

  <h2 >About the Author</h2><br />
  {abcd}
  <p> This text is an example of text that can be replaced in the same space. This text was generated from the Arabic text generator </p><br />

  <a href='https://example.blogspot.com/'>
    <button class="k2-button">
      Read More ➔
    </button>
  </a><br />

</div>
    </div>
  )
}

export default Home
