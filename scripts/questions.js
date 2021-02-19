// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: 'O que significa HTML?',
    answer: 'Hyper Text Markup Language',
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language'
    ]
  },
    {
    numb: 2,
    question: 'Quem está criando os padrões da Web?',
    answer: 'The world wide web Consortium',
    options: [
      'Mozila',
      'Microsoft',
      'The world wide web Consortium',
      'Google'
    ]
  },
    {
    numb: 3,
    question: 'Escolha o elemento HTML correto para o título maior:',
    answer: '< h1 >',
    options: [
      '< heading >',
      '< h6 >',
      '< h1 >',
      '< head >'
    ]
  },
    {
    numb: 4,
    question: '4.Qual é o elemento HTML correto para inserir uma quebra de linha?',
    answer: '< br >',
    options: [
      '< br >',
      '< lb >',
      '< break >',
      '< td >'
    ]
  },
    {
    numb: 5,
    question: 'Qual é o HTML correto para adicionar uma cor de fundo?',
    answer: '< body style="background-color:yellow;" >< /body >',
    options: [
      '< body bg="yellow"></ body >',
      '< body style="background-color:yellow;" >< /body >',
      '< background >yellow< /background >',
      '< color >yellow< /color >'
    ]
  },

  {
    numb: 6,
    question: 'Escolha o elemento HTML correto para definir o texto importante',
    answer: '< strong >',
    options: [
      '< important >',
      '< b >',
      '< i >',
      '< strong >'
    ]
  },

  {
    numb: 7,
    question: 'Escolha o elemento HTML correto para definir o texto enfatizado',
    answer: '< em >',
    options: [
      '< em >',
      '< italic >',
      '< i >',
      '< p >'
    ]
  },

  {
    numb: 8,
    question: 'Qual é o HTML correto para criar um hiperlink?',
    answer: '< a href="http://www.facebook.com" >facebook< /a>',
    options: [
      '< a name="http://www.facebook.com" >facebook.com< /a>',
      '< a>http://www.facebook.com</ a>',
      '< a href="http://www.facebook.com" >facebook< /a>',
      '< a url="http://www.facebook.com" >facebook.com< /a>'
    ]
  },

  {
    numb: 9,
    question: 'Qual caractere é usado para indicar uma tag final?',
    answer: '/',
    options: [
      '*',
      '<',
      '^',
      '/'
    ]
  },

  {
    numb: 10,
    question: 'Como você pode abrir um link em uma nova guia / janela do navegador?',
    answer: '< a href="url" target="_blank" >',
    options: [
      '< a href="url" target="_blank" >',
      '< a href="url" new >',
      '< a href="url" target="new" >',
      '< a http="site" target="window" >'
    ]
  },

  {
    numb: 11,
    question: 'Quais desses elementos são todos elementos < table >',
    answer: '< table > < tr > < td >',
    options: [
      '< table > < tr > < tt >',
      '< table > < head > < tfoot >',
      '< table > < tr > < td >',
      '< thead > < body > < tr >'
    ]
  },

  {
    numb: 12,
    question: 'Os elementos "inline" são normalmente exibidos sem iniciar uma nova linha.',
    answer: 'Verdadeiro',
    options: [
      'Verdadeiro',
      'Falso',
      'Não sei o que é inline',
      'Às vezes'
    ]
  },
  
  {
    numb: 13,
    question: 'Como você pode fazer uma lista numerada?',
    answer: '< ol >',
    options: [
      '< list >',
      '< ul >',
      '< ol >',
      '< dl >'
    ]
  },

  {
    numb: 14,
    question: 'Como você pode fazer uma lista com marcadores?',
    answer: '< ul >',
    options: [
      '< dl >',
      '< ul >',
      '< list >',
      '< ol >'
    ]
  },

  {
    numb: 15,
    question: 'Qual é o HTML correto para marcar uma caixa de seleção?',
    answer: '< input type="checkbox" >',
    options: [
      '< checkbox >',
      '< input type="checkbox" >',
      '< input type="check" >',
      '< check >'
    ]
  },

  {
    numb: 16,
    question: 'Qual é o HTML correto para criar um campo de entrada de texto?',
    answer: '< input type="text" >',
    options: [
      '< input type="text" >',
      '< textinput type="text" >',
      '< textfield >',
      '< input type="textfield" >'
    ]
  },

  {
    numb: 17,
    question: 'Qual é o HTML correto para fazer uma lista suspensa?',
    answer: '< select >',
    options: [
      '< input type="list" >',
      '< select >',
      '< input type="dropdown" >',
      '< list >'
    ]
  },

  {
    numb: 18,
    question: 'Qual é o HTML correto para criar uma área de texto?',
    answer: '< textarea >',
    options: [
      '< textarea >',
      '< inserttext >',
      '< input type="textbox" >',
      '< input type="textarea" >'
    ]
  },

  {
    numb: 19,
    question: 'Qual é o HTML correto para inserir uma imagem?',
    answer: '< img src="imagem.png" alt"Minhaimagem" >',
    options: [
      '< img src="imagem.png" alt"Minhaimagem" >',
      '< img alt"Minhaimagem" >imagem.png< /img >',
      '< img href="imagem.png" alt"Minhaimagem" >',
      '< image src="imagem.png" alt"Minhaimagem" >'
    ]
  },

  {
    numb: 20,
    question: 'Qual é o HTML correto para inserir uma imagem de fundo?',
    answer: '< body style="background-image:url(background.png)" >',
    options: [
      '< background img="background.png" >',
      '< body bg="background.png" >',
      '< body style="background-image:url(background.png)" >',
      '< body style="background.png" >'
    ]
  },

  {
    numb: 21,
    question: 'Um < iframe > é usado para exibir uma página da web dentro de uma página da web.',
    answer: 'Verdadeiro',
    options: [
      'Falso',
      'Não existe < iframe >',
      'Não sei o que é < iframe >',
      'Verdadeiro'
    ]
  },

  {
    numb: 22,
    question: 'Os elementos com display "block" são normalmente exibidos sem iniciar uma nova linha.',
    answer: 'Falso',
    options: [
      'Verdadeiro',
      'O que são elementos de bloco',
      'Falso',
      'Não existem elemento de bloco'
    ]
  },

  {
    numb: 23,
    question: 'Qual elemento HTML define o título de um documento?',
    answer: '< title >',
    options: [
      '< meta >',
      '< title >',
      '< head >',
      '< p >'
    ]
  },

  {
    numb: 24,
    question: 'Qual atributo HTML especifica um texto alternativo para uma imagem, se a imagem não puder ser exibida?',
    answer: 'alt',
    options: [
      'title',
      'longdesc',
      'src',
      'alt'
    ]
  },

  {
    numb: 25,
    question: 'Comentários HTML começam com <!-- e terminam com -->',
    answer: 'Verdadeiro',
    options: [
      'Falso',
      'A HTML não tem comentários',
      'Não sei o que são comentários',
      'Verdadeiro'
    ]
  },

  {
    numb: 26,
    question: 'Qual doctype é o correcto para HTML5',
    answer: '< !DOCTYPE html >',
    options: [
      '< !DOCTYPE html >',
      '< !DOCTYPE HTML5 >',
      '< !DOCTYPE HTML PUBLIC "-/facebook HTML5" >',
      '< !HTML5 >'
    ]
  },

  {
    numb: 27,
    question: 'Qual elemento HTML é usado para especificar um rodapé para um documento ou seção?',
    answer: '< footer >',
    options: [
      '< section >',
      '< bottom >',
      '< footer >',
      '< abr >'
    ]
  },

  {
    numb: 28,
    question: 'Em HTML, você pode incorporar elementos SVG diretamente em uma página HTML',
    answer: 'Verdadeiro',
    options: [
      'Falso',
      'Verdadeiro',
      'Não tenho a certeza',
      'O que é SVG'
    ]
  },

  {
    numb: 29,
    question: 'Qual é o elemento HTML correto para reproduzir arquivos de vídeo?',
    answer: '< video >',
    options: [
      '< movie >',
      '< media >',
      '< video >',
      '< audio >'
    ]
  },

  {
    numb: 30,
    question: 'Qual é o elemento HTML correto para reproduzir arquivos de áudio?',
    answer: '< audio >',
    options: [
      '< audio >',
      '< mp3 >',
      '< sound >',
      '< mp4 >'
    ]
  },

  {
    numb: 31,
    question: 'O atributo global HTML, "contenteditable" é usado para:',
    answer: 'Especificar se o conteúdo de um elemento deve ser editável ou não',
    options: [
      'Atualizar o conteúdo do servidor',
      'Especificar se o conteúdo de um elemento deve ser editável ou não',
      'Especifica um menu de contexto para um elemento. O menu aparece quando um usuário clica com o botão direito no elemento',
      'Retorna a posição do primeiro elemento encontrado ocorrência de conteúdo dentro de uma string'
    ]
  },

  {
    numb: 32,
    question: 'Em HTML, onblur e onfocus são:',
    answer: 'Atributos de evento',
    options: [
      'Elementos HTML',
      'Atributos de evento',
      'Atributos de estilização',
      'Tags'
    ]
  },

  {
    numb: 33,
    question: 'Os gráficos definidos por SVG estão em qual formato?',
    answer: 'CSS',
    options: [
      'CSS',
      'XML',
      'HTML',
      'XHTML'
    ]
  },

  {
    numb: 34,
    question: 'O elemento HTML < canvas > é usado para:',
    answer: 'Criar elementos arrastáveis',
    options: [
      'Manipular dados em MySQL',
      'Criar elementos arrastáveis',
      'Exibir registros de banco de dados',
      'Desenhar gráficos'
    ]
  },

  {
    numb: 35,
    question: 'Em HTML, qual atributo é usado para especificar que um campo de entrada deve ser preenchido?',
    answer: 'required',
    options: [
      'validate',
      'formvalidate',
      'placeholder',
      'required'
    ]
  },

  {
    numb: 36,
    question: 'Qual tipo de entrada define um controle deslizante?',
    answer: 'range',
    options: [
      'controls',
      'search',
      'range',
      'slider'
    ]
  },

  {
    numb: 37,
    question: 'Qual elemento HTML é usado para exibir uma medida escalar dentro de um intervalo?',
    answer: '< meter >',
    options: [
      '< range >',
      '< measure >',
      '< gauge >',
      '< meter >'
    ]
  },

  {
    numb: 38,
    question: 'Qual elemento HTML define os links de navegação?',
    answer: '< nav >',
    options: [
      '< navigation >',
      '< nav >',
      '< navigate >',
      '< navicator >'
    ]
  },

  {
    numb: 39,
    question: 'Em HTML, para que serve o elemento < aside > ?',
    answer: 'Lista de navegação a ser mostrada no lado esquerdo da página',
    options: [
      'Conteúdo além do conteúdo da página',
      'Lista de navegação a ser mostrada no lado esquerdo da página',
      'O conjunto de caracteres ACII para enviar informações entre computadores na internet',
      'Eu não sei'
    ]
  },

  {
    numb: 40,
    question: 'Qual elemento HTML é usado para especificar um cabeçalho para um documento ou seção?',
    answer: '< header >',
    options: [
      '< top >',
      '< head >',
      '< section >',
      '< header >'
    ]
  },

  {
    numb: 41,
    question: 'O que significa CSS?',
    answer: 'Cascading Style Sheets',
    options: [
      'Creative Style Sheets',
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets'
    ]
  },

  {
    numb: 42,
    question: 'Qual é o HTML correto para se referir a uma folha de estilo externa?',
    answer: '< link rel="stylesheet" type="text/css" href="meuestilo.css" >',
    options: [
      '< link rel="stylesheet" type="text/css" href="meuestilo.css" >',
      '< style src="meuestilo.css" >',
      '< stylesheet >meuestilo.css< /stylesheet >',
      '< cascading >meuestilo.css< /cascading >'
    ]
  },

  {
    numb: 43,
    question: 'Onde em um documento HTML é o local correto para se referir a uma folha de estilo externa?',
    answer: 'Na secção < head >',
    options: [
      'Na secção < body >',
      'No final do documento',
      'Na secção < head >',
      'Dentro da tag < p >'
    ]
  },

  {
    numb: 44,
    question: 'Qual tag HTML é usada para definir uma folha de estilo interna?',
    answer: '< style >',
    options: [
      '< internal >',
      '< css >',
      '< style >',
      '< script >'
    ]
  },

  {
    numb: 45,
    question: 'Qual atributo HTML é usado para definir estilos embutidos?',
    answer: 'style',
    options: [
      'class',
      'style',
      'font',
      'styles'
    ]
  },

  {
    numb: 46,
    question: 'Qual é a sintaxe CSS correta?',
    answer: 'body{color:black;}',
    options: [
      'body:color=black;',
      '{body;color:black;}',
      'body{color:black;}',
      '{body:color=black;}'
    ]
  },

  {
    numb: 47,
    question: 'Como você insere um comentário em um arquivo CSS?',
    answer: '/* Isso é um comentário */',
    options: [
      '// Isso é um comentário',
      '* Isso é um comentário',
      '/* Isso é um comentário */',
      '// Isso é um comentário //'
    ]
  },

  {
    numb: 48,
    question: 'Qual propriedade é usada para alterar a cor de fundo?',
    answer: 'background-color',
    options: [
      'background-color',
      'color',
      'bgcolor',
      'backcolor'
    ]
  },

  {
    numb: 49,
    question: 'Como você adiciona uma cor de fundo para todos os elementos < h1 >?',
    answer: 'h1 {background-color: #FFFFFF}',
    options: [
      'h1 {background-color: #FFFFFF}',
      'h1.all {background-color: #FFFFFF}',
      'all.h1 {background-color: #FFFFFF}',
      'every.h1 {background-color: #FFFFFF}'
    ]
  },

  {
    numb: 50,
    question: 'Qual propriedade CSS é usada para alterar a cor do texto de um elemento?',
    answer: 'color',
    options: [
      'text-color',
      'color',
      'fgcolor',
      'elementcolor'
    ]
  }
];


