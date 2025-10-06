import { Link } from 'react-router-dom'
import './About.css'

async function about() {
  try {
    const response = await fetch('http://localhost:7002/about');
    const result = await response.json();
    const aboutData = result.data;

    return (
        <>
        <h1>aboutData.title</h1>
        <p>aboutData.body</p>
        <p>aboutData.image</p>
        </>
        )

  } catch (error) {
    console.error('Failed to load about content:', error);
  }

  
}

export default about;

