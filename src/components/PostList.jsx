import Post from "./Post";
import classes from "./PostList.module.css"

function PostList(){

  return(
    <ul className={classes.postList}>
      <li><Post author="Gabriel Campari" body="Cybersecurity & IoT" /></li>
      <li><Post author="Felipe Araújo" body="Backend developer" /></li>
    </ul>
  );
}

export default PostList; 