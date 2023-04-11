import classes from "./Login.module.css"

function Login()
{
    return <>
    <div className={classes.container}>
        <h3 className={classes.headLogin}>USER LOGIN</h3>
        <form action="" method="post" className={classes.LoginForm  git }>
           <div>
           <input type="text" className={classes.username} placeholder="username" />
           </div>
           <div>
           <input type="text" classes={classes.pass} />
           </div>
            <input type="submit" value="Login" classes={classes.btnLogin} />
        </form>
    </div>
    </>
}

export default Login;