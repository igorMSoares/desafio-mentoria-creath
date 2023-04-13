import styles from '@/styles/splash.module.css';
import Image from 'next/image';
import img from '@/assets/img/killuaHXH.png'
import Link from 'next/link';

export default function Splash() {

    return (
        <div id={styles.div_background}>
            <div id={styles.div_header}>
                <div id={styles.div_menu}>

                    <div id={styles.div_logo}>
                        <p id={styles.p_logo}> Sua Marca </p>
                    </div>

                    <div id={styles.div_buttons}>
                        <Link id={styles.btn_login} href='/Login/Login'>
                            <p className={styles.text_buttons}> Login </p>
                        </Link>

                        <Link id={styles.btn_cadastrar} href='/Register/Register'>
                            <p className={styles.text_buttons}>Cadastrar-se</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div id={styles.div_marca}>
                <div id={styles.div_logoIMG}>
                   <Image src={img} width='300' height='300'alt="Logo da empresa" priority/> 
                </div>
                <p id={styles.tex_marca}>Sua Marca</p>
            </div>
        </div>
    );
}
