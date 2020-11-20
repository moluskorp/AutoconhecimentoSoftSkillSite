import React from 'react';

import { Title, Subtitle, Text, Testimonials, Divtestimonials, Titles, Image } from './styles';

import marcela from '../../assets/marcela.jpg'
import keny from '../../assets/keny.jpg'
import cintia from '../../assets/cintia.jpg'
import elaine from '../../assets/elaine.jpg'
import michele from '../../assets/michele.jpg'
import ines from '../../assets/ines.jpg'
//import emocoes from '../../assets/emocoes.pdf'
import autoconhecimento from '../../assets/autoconhecimento.png'
import autoconhecimento2 from '../../assets/autoconhecimento2.jpg'

const Main: React.FC = () => {
    return (
        <>
            <Image src={autoconhecimento} alt="Autoconhecimento" />
            <Titles>
                <h1>Você já se sentiu um estranho para você mesmo(a) ?</h1>
                <h2>Conheça agora o maior vilão da sua Carreira e como ele te
                impedi de se destacar da multidão!</h2>
                <p />
            </Titles>
            <Text>
                Vem comigo que vou te contar uma história...
                <p></p>
                Se imagine em uma entrevista de emprego... O entrevistador
                pergunta quais são os seus pontos fortes, e você simplismente
                não sabe o que responder, em seguida ele pergunta sobre seus
                defeitos, e você também não sabe o que dizer!
                <p />
                Agora quero que você se coloque na posição do entrevistador,
                você se contrataria para essa vaga ?
                <p />
                Provavelmente não, a não ser que seja o único candidato,
                o que convenhamos é muito difícil de acontecer hoje me dia!
                <p />
                Pois é... Hoje falaremos da soft skill essencial para todo mundo
                , a número 1, sem ela você não se encaixa, sem ela você não sabe
                o seu real valor, sem ela, você será apenas mais um !
                <p />
                Estamos falando sobre o AUTOCONHECIMENTO!
                <p />
                O autoconhecimento nada mais é do que uma investigação sobre
                si próprio. <p />
                Em outras palavras, é a nossa capacidade de olhar para dentro
                e saber exatamente quais são as virtudes e os defeitos, as forças
                e as fraquezas.
                <p />
                Pois se não sabemos nossas fraquezas, não sabemos o que temos
                a melhorar, e se não sabemos a nossa força, não sabemos como
                nos destacar!
                <p />
                Significa fazer um mapeamento interno completo e, a partir dele,
                perceber quais devem ser nossas ações e onde elas vão nos levar.
                <p /><p />
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9OiWA0qawIo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <Text>
                <p />
                Confira agora alguns depoimentos de pessoas que trabalharam o
                autoconhecimento e só não tiveram suas carreiras transformadas
                mas também suas vidas !
                <p /><p />
            </Text>
            <Divtestimonials>
                <Testimonials>
                    <img
                        src={marcela}
                        alt="Marcela" />
                    <h1>Marcela</h1><p />
                    <strong>Vou falar das minhas duas profissões.<p />
                    A de atriz e de bancária,porque o auto conhecimento  auxiliou em ambas, porém de modo distinto.<p />

                    Como bancária: no princípio da minha carreira (trabalho em bancos desde 2002), pela falta do auto
                    conhecimento entrava num looping mental de pequenez com frequência, pois os bancos nunca estão
                    satisfeitos, sempre querem mais e mais... O que você é nunca basta!<p />
                    A partir do momento que passei a me conhecer melhor, passei a perceber o meu valor, e este ser
                    insaciável que é o banco não conseguia mais me colocar no lugar de diminuição como antes.<p />

                    Como atriz: passei a ter maior desenvoltura, conhecimento de quem eu sou e das capacidades
                    que possuo para o desenvolvimento da minha expressão artística.<p />

                    Como ser em sua totalidade, o auto conhecimento me leva a saber quem sou, automaticamente o que faço
                    Porque eu não sou o que acredito, eu sou o que faço!<p />
                    E se não sei quem sou... Não sei o que fazer para minha completude.<p />

                    Ainda não descobri este ser que sou por inteiro, e sinto que essa jornada é sem fim,
                    mas que a cada novo espaço habitado por meu ser é descoberto, as "coisas" fazem mais sentido,
                    a satisfação e gratidão por tudo que faço é muito maior...<p />

                    Certa vez um amigo músico estava se lamentando por não ter
                    'sucesso'. E eu disse "mas você não faz música pra ter sucesso, você faz música pois você é músico!
                    Uma árvore não dá frutos porque tem público, ela simplesmente é! E isso basta para ela..."<p />

                    O que falei para ele, na verdade também servia para mim...<p />
                    Fui durante um tempo "frustada" por não ganhar meu "pão" através das artes...
                    E percebi naquele instante, que faço arte por ser parte de mim...
                    Não por qualquer outro motivo específico... Isso se chama amor... </strong>
                </Testimonials>
                <Testimonials>
                    <img
                        src={keny}
                        alt="Keny" />
                    <h1>Keny</h1>
                    <strong>O autoconhecimento me ajudou a ver que precisava ficar mais com meu filho do que seguir uma
                    carreira (devido a perda da mae).<p />
                    E sem saber mto o que eu queria fazer pedi demissão e fui fazer
                    um curso e hj tô mto mais feliz...<p />
                    Resumindo parece que praticando um autoconhecimento a gente se desapega de padrões e procura trabalhar
                    com algo mais leve, mais livre.... Acho q todos que passarem pelo processo tendem a trabalhar ou a
                    procurar algo que goste mais do que aquele 'aprisionamento' de trabalhar com algo que não goste
                    simplesmente pelo financeiro....<p />
                    E uma outra hj ganho mais do que ganhava quando trabalhava empregado.</strong>
                </Testimonials>
                <Testimonials>
                    <img
                        src={elaine}
                        alt="Elaine" />
                    <h1>Elaine</h1>
                    <strong>O autoconhecimento é a ciência do conhecer a si próprio e aos outros. <p />
                            Quando nos permitimos olhar para dentro e olhar ao redor. <p />
                            É a plenitude do saber que somos um e à partir desse caminho podermos fazer escolhas mais conscientes.<p />
                            É uma busca para evolução do ser.v
                            Quando me conheci aceitei que sou imperfeita, mas tomei ciência que posso através
                            da incessante repetição de novas atitudes, formar nova consciência.<p />
                            E assim seguir em frente todos os dias.</strong>
                </Testimonials>
            </Divtestimonials>
            <Divtestimonials>
                <Testimonials>
                    <img
                        src={cintia}
                        alt="Cintia" />
                    <h1>Cintia</h1>
                    <strong>O Autoconhecimento é a luz na minha escuridão , na qual me reconheço, me redescubro,
                        reencanto minha alma, renasço ! <p />
                        Digo que o Autoconhecimento é um túnel escuro...
                        no qual estamos como lanternas e a cada passo para dentro
                        iluminamos e podemos escolher iluminar amorosamente...<p />
                        Assim se fazendo  processo de cura e evolução.</strong>
                </Testimonials>

                <Testimonials>
                    <img
                        src={michele}
                        alt="Michele" />
                    <h1>Michele</h1>
                    <strong>O autoconhecimento me ajudou a descobrir meus dons e talentos. <p />
                        E através disso está me ajudando a descobrir  qual carreira profissional seguir.</strong>
                </Testimonials>
                <Testimonials>
                    <img
                        src={ines}
                        alt="Ines" />
                    <h1>Ines</h1>
                    <strong>o autoconhecimento me ajudou a escolher melhor o meu propósito,
                        a escolher um trabalho com sentido pra mim</strong>
                </Testimonials>
            </Divtestimonials>
        </>
    );
}

export default Main;