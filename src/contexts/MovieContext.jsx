import React, { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovies = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [showTrailerPopup, setShowTrailerPopup] = useState(false);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
  const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';


  const sampleMovies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      vote_average: 8.8,
      release_date: "2010-07-16",
      runtime: 148,
      genres: ["Sci-Fi", "Action", "Thriller"],
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      type: "movie"
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      vote_average: 9.0,
      release_date: "2008-07-18",
      runtime: 152,
      genres: ["Action", "Crime", "Drama"],
      director: "Christopher Nolan",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      type: "movie"
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
      vote_average: 8.6,
      release_date: "2014-11-07",
      runtime: 169,
      genres: ["Adventure", "Drama", "Sci-Fi"],
      director: "Christopher Nolan",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      type: "movie"
    },
    {
      id: 4,
      title: "Breaking Bad",
      year: 2008,
      overview: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future as a terminal lung cancer diagnosis pushes him to become a criminal.",
      poster_path: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
      vote_average: 9.5,
      release_date: "2008-01-20",
      runtime: 45,
      genres: ["Crime", "Drama", "Thriller"],
      director: "Vince Gilligan",
      cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
      type: "tv"
    },
    {
      id: 5,
      title: "Stranger Things",
      year: 2016,
      overview: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
      poster_path: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      vote_average: 8.7,
      release_date: "2016-07-15",
      runtime: 50,
      genres: ["Drama", "Fantasy", "Horror"],
      director: "The Duffer Brothers",
      cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
      type: "tv"
    },
    {
      id: 6,
      title: "The Crown",
      year: 2016,
      overview: "The story of Queen Elizabeth II and the events that shaped the second half of the twentieth century.",
      poster_path: "https://image.tmdb.org/t/p/w500/7k7oKJUyJmUu1Jz3JT5HkqQyE2Q.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/7k7oKJUyJmUu1Jz3JT5HkqQyE2Q.jpg",
      vote_average: 8.7,
      release_date: "2016-11-04",
      runtime: 60,
      genres: ["Biography", "Drama", "History"],
      director: "Peter Morgan",
      cast: ["Olivia Colman", "Emma Corrin", "Josh O'Connor"],
      type: "tv"
    },
    {
      id: 7,
      title: "Avengers: Endgame",
      year: 2019,
      overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance.",
      poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      vote_average: 8.4,
      release_date: "2019-04-26",
      runtime: 181,
      genres: ["Action", "Adventure", "Sci-Fi"],
      director: "Anthony Russo, Joe Russo",
      cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
      type: "movie"
    },
    {
      id: 8,
      title: "Game of Thrones",
      year: 2011,
      overview: "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros.",
      poster_path: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
      vote_average: 9.3,
      release_date: "2011-04-17",
      runtime: 57,
      genres: ["Action", "Adventure", "Drama"],
      director: "David Benioff, D.B. Weiss",
      cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
      type: "tv"
    },
    {
      id: 9,
      title: "The Matrix",
      year: 1999,
      overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
      vote_average: 8.7,
      release_date: "1999-03-31",
      runtime: 136,
      genres: ["Action", "Sci-Fi"],
      director: "Lana Wachowski, Lilly Wachowski",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      type: "movie"
    },
    {
      id: 10,
      title: "Money Heist",
      year: 2017,
      overview: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history.",
      poster_path: "https://image.tmdb.org/t/p/w500/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/9Rj8l6gElLpRL7KArBJN6wW2QZy.jpg",
      vote_average: 8.3,
      release_date: "2017-05-02",
      runtime: 70,
      genres: ["Action", "Crime", "Mystery"],
      director: "Álex Pina",
      cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
      type: "tv"
    },
    {
      id: 11,
      title: "The Shawshank Redemption",
      year: 1994,
      overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      vote_average: 9.3,
      release_date: "1994-09-23",
      runtime: 142,
      genres: ["Drama"],
      director: "Frank Darabont",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      type: "movie"
    },
    {
      id: 12,
      title: "Friends",
      year: 1994,
      overview: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
      poster_path: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTEGKp15.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/2u7zbn8EfnHY2f2W5GFy5YK1q1C.jpg",
      vote_average: 8.9,
      release_date: "1994-09-22",
      runtime: 22,
      genres: ["Comedy", "Drama", "Romance"],
      director: "David Crane, Marta Kauffman",
      cast: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
      type: "tv"
    },
    {
      id: 13,
      title: "Pulp Fiction",
      year: 1994,
      overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      poster_path: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcE.jpg",
      vote_average: 8.9,
      release_date: "1994-10-14",
      runtime: 154,
      genres: ["Crime", "Drama"],
      director: "Quentin Tarantino",
      cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      type: "movie"
    },
    {
      id: 14,
      title: "The Office",
      year: 2005,
      overview: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
      poster_path: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
      vote_average: 8.9,
      release_date: "2005-03-24",
      runtime: 22,
      genres: ["Comedy"],
      director: "Greg Daniels",
      cast: ["Steve Carell", "Rainn Wilson", "John Krasinski"],
      type: "tv"
    },
    {
      id: 15,
      title: "Fight Club",
      year: 1999,
      overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      poster_path: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
      vote_average: 8.8,
      release_date: "1999-10-15",
      runtime: 139,
      genres: ["Drama"],
      director: "David Fincher",
      cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      type: "movie"
    },
    {
      id: 16,
      title: "The Witcher",
      year: 2019,
      overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      poster_path: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
      vote_average: 8.2,
      release_date: "2019-12-20",
      runtime: 60,
      genres: ["Action", "Adventure", "Drama"],
      director: "Lauren Schmidt Hissrich",
      cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
      type: "tv"
    },
    {
      id: 17,
      title: "Forrest Gump",
      year: 1994,
      overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      vote_average: 8.8,
      release_date: "1994-07-06",
      runtime: 142,
      genres: ["Comedy", "Drama", "Romance"],
      director: "Robert Zemeckis",
      cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      type: "movie"
    },
    {
      id: 18,
      title: "The Mandalorian",
      year: 2019,
      overview: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      poster_path: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/9yBVqNruk6YfxthWQNstnJJfIqQ.jpg",
      vote_average: 8.8,
      release_date: "2019-11-12",
      runtime: 40,
      genres: ["Action", "Adventure", "Sci-Fi"],
      director: "Jon Favreau",
      cast: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
      type: "tv"
    },
    {
      id: 19,
      title: "Goodfellas",
      year: 1990,
      overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
      poster_path: "https://image.tmdb.org/t/p/w500/aKuFiU82suyIS7pUZfp3YIrqpgb.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/6POBWybSBDBKjSs1VAQcnQC1qyt.jpg",
      vote_average: 8.7,
      release_date: "1990-09-19",
      runtime: 146,
      genres: ["Crime", "Drama"],
      director: "Martin Scorsese",
      cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
      type: "movie"
    },
    {
      id: 20,
      title: "The Boys",
      year: 2019,
      overview: "A group of vigilantes known informally as 'The Boys' set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
      poster_path: "https://image.tmdb.org/t/p/w500/stTEycfG992cHYGEUEBFKkR1k01.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/9TVD6BwT64aG8Uw5Mkr7dmpqLJt.jpg",
      vote_average: 8.7,
      release_date: "2019-07-26",
      runtime: 60,
      genres: ["Action", "Comedy", "Crime"],
      director: "Eric Kripke",
      cast: ["Karl Urban", "Jack Quaid", "Antony Starr"],
      type: "tv"
    },
    {
      id: 21,
      title: "The Godfather",
      year: 1972,
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
      poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      vote_average: 9.2,
      release_date: "1972-03-24",
      runtime: 175,
      genres: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
      cast: ["Marlon Brando", "Al Pacino", "James Caan"],
      type: "movie"
    },
    {
      id: 22,
      title: "Rick and Morty",
      year: 2013,
      overview: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
      poster_path: "https://image.tmdb.org/t/p/w500/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
      vote_average: 8.7,
      release_date: "2013-12-02",
      runtime: 23,
      genres: ["Animation", "Comedy", "Sci-Fi"],
      director: "Justin Roiland, Dan Harmon",
      cast: ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
      type: "tv"
    },
    {
      id: 23,
      title: "Schindler's List",
      year: 1993,
      overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      poster_path: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIFyrH.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/1Zf6wkxGc1mo3ZR7rJGmcmqS1qX.jpg",
      vote_average: 8.9,
      release_date: "1993-12-15",
      runtime: 195,
      genres: ["Biography", "Drama", "History"],
      director: "Steven Spielberg",
      cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      type: "movie"
    },
    {
      id: 24,
      title: "The Walking Dead",
      year: 2010,
      overview: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
      poster_path: "https://image.tmdb.org/t/p/w500/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/wA2WojvSfQOib0JzWt4gE6Tn2Rp.jpg",
      vote_average: 8.2,
      release_date: "2010-10-31",
      runtime: 44,
      genres: ["Drama", "Horror", "Thriller"],
      director: "Frank Darabont",
      cast: ["Andrew Lincoln", "Norman Reedus", "Melissa McBride"],
      type: "tv"
    },
    {
      id: 25,
      title: "The Silence of the Lambs",
      year: 1991,
      overview: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
      poster_path: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/mfwq2nMBzArzQ7Y9RKE8SKeeoQz.jpg",
      vote_average: 8.6,
      release_date: "1991-02-14",
      runtime: 118,
      genres: ["Crime", "Drama", "Thriller"],
      director: "Jonathan Demme",
      cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
      type: "movie"
    },
    {
      id: 26,
      title: "Black Mirror",
      year: 2011,
      overview: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
      poster_path: "https://image.tmdb.org/t/p/w500/7PRqCdBQfVp36NUv9Ic5wPqsTv9.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/5a4JdoYwFZ6Q79zVSgoVRlLV1y.jpg",
      vote_average: 8.8,
      release_date: "2011-12-04",
      runtime: 60,
      genres: ["Drama", "Sci-Fi", "Thriller"],
      director: "Charlie Brooker",
      cast: ["Daniel Lapaine", "Hannah John-Kamen", "Michaela Coel"],
      type: "tv"
    },
    {
      id: 27,
      title: "The Lion King",
      year: 1994,
      overview: "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival.",
      poster_path: "https://image.tmdb.org/t/p/w500/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      vote_average: 8.5,
      release_date: "1994-06-24",
      runtime: 88,
      genres: ["Animation", "Adventure", "Drama"],
      director: "Roger Allers, Rob Minkoff",
      cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
      type: "movie"
    },
    {
      id: 28,
      title: "The Big Bang Theory",
      year: 2007,
      overview: "The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper, both physicists; Penny, a waitress and aspiring actress who lives across the hall.",
      poster_path: "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8rTkTOZ.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/ooBGRQBdbGzBxAVfExiO8rTkTOZ.jpg",
      vote_average: 7.9,
      release_date: "2007-09-24",
      runtime: 22,
      genres: ["Comedy", "Romance"],
      director: "Chuck Lorre, Bill Prady",
      cast: ["Johnny Galecki", "Jim Parsons", "Kaley Cuoco"],
      type: "tv"
    },
    {
      id: 29,
      title: "The Green Mile",
      year: 1999,
      overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      poster_path: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/8XDJvUWd29Sn3Gjqmlr2npgHm8d.jpg",
      vote_average: 8.6,
      release_date: "1999-12-10",
      runtime: 189,
      genres: ["Crime", "Drama", "Fantasy"],
      director: "Frank Darabont",
      cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
      type: "movie"
    },
    {
      id: 30,
      title: "Narcos",
      year: 2015,
      overview: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
      poster_path: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      vote_average: 8.8,
      release_date: "2015-08-28",
      runtime: 50,
      genres: ["Biography", "Crime", "Drama"],
      director: "Carlo Bernard, Chris Brancato",
      cast: ["Wagner Moura", "Boyd Holbrook", "Pedro Pascal"],
      type: "tv"
    },
    {
      id: 31,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.",
      poster_path: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/1stdJBvhhGVBqr6hJIyqAg88Cnv.jpg",
      vote_average: 8.8,
      release_date: "2001-12-19",
      runtime: 178,
      genres: ["Action", "Adventure", "Drama"],
      director: "Peter Jackson",
      cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      type: "movie"
    },
    {
      id: 32,
      title: "The Simpsons",
      year: 1989,
      overview: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family.",
      poster_path: "https://image.tmdb.org/t/p/w500/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
      vote_average: 8.7,
      release_date: "1989-12-17",
      runtime: 22,
      genres: ["Animation", "Comedy"],
      director: "Matt Groening",
      cast: ["Dan Castellaneta", "Julie Kavner", "Nancy Cartwright"],
      type: "tv"
    },
    {
      id: 33,
      title: "The Shining",
      year: 1980,
      overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter.",
      poster_path: "https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/5E9SD9MgUT8ag3CVd6cjYghvqhs.jpg",
      vote_average: 8.4,
      release_date: "1980-05-23",
      runtime: 146,
      genres: ["Horror"],
      director: "Stanley Kubrick",
      cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
      type: "movie"
    },
    {
      id: 34,
      title: "Westworld",
      year: 2016,
      overview: "A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past.",
      poster_path: "https://image.tmdb.org/t/p/w500/6aj09UTMQNyfSfk0ZX8r2mXKnte.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/6aj09UTMQNyfSfk0ZX8r2mXKnte.jpg",
      vote_average: 8.6,
      release_date: "2016-10-02",
      runtime: 60,
      genres: ["Drama", "Mystery", "Sci-Fi"],
      director: "Jonathan Nolan, Lisa Joy",
      cast: ["Evan Rachel Wood", "Thandie Newton", "Jeffrey Wright"],
      type: "tv"
    },
    {
      id: 35,
      title: "The Departed",
      year: 2006,
      overview: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise.",
      poster_path: "https://image.tmdb.org/t/p/w500/n4H2vuvuIbM761s9zG4NQ6bb0p9.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/7k9y58XD1tD1L5VZ6JDh0PqGEV5.jpg",
      vote_average: 8.5,
      release_date: "2006-10-06",
      runtime: 151,
      genres: ["Crime", "Drama", "Thriller"],
      director: "Martin Scorsese",
      cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
      type: "movie"
    },
    {
      id: 36,
      title: "The Handmaid's Tale",
      year: 2017,
      overview: "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",
      poster_path: "https://image.tmdb.org/t/p/w500/oAtxsn3pICDfKf5Ogya1wE0b5kK.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/oAtxsn3pICDfKf5Ogya1wE0b5kK.jpg",
      vote_average: 8.4,
      release_date: "2017-04-26",
      runtime: 60,
      genres: ["Drama", "Sci-Fi", "Thriller"],
      director: "Bruce Miller",
      cast: ["Elisabeth Moss", "Joseph Fiennes", "Yvonne Strahovski"],
      type: "tv"
    },
    {
      id: 37,
      title: "Gladiator",
      year: 2000,
      overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      poster_path: "https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
      vote_average: 8.5,
      release_date: "2000-05-05",
      runtime: 155,
      genres: ["Action", "Adventure", "Drama"],
      director: "Ridley Scott",
      cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      type: "movie"
    },
    {
      id: 38,
      title: "The Expanse",
      year: 2015,
      overview: "A thriller set two hundred years in the future following the case of a missing young woman who brings a hardened detective and a rogue ship's captain together in a race across the solar system.",
      poster_path: "https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
      vote_average: 8.5,
      release_date: "2015-12-14",
      runtime: 60,
      genres: ["Drama", "Mystery", "Sci-Fi"],
      director: "Mark Fergus, Hawk Ostby",
      cast: ["Steven Strait", "Cas Anvar", "Dominique Tipper"],
      type: "tv"
    },
    {
      id: 39,
      title: "The Good, the Bad and the Ugly",
      year: 1966,
      overview: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      poster_path: "https://image.tmdb.org/t/p/w500/WOJDEPGQJkMZRBjVC41m9tNSWr1.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/WOJDEPGQJkMZRBjVC41m9tNSWr1.jpg",
      vote_average: 8.8,
      release_date: "1966-12-23",
      runtime: 161,
      genres: ["Western"],
      director: "Sergio Leone",
      cast: ["Clint Eastwood", "Lee Van Cleef", "Eli Wallach"],
      type: "movie"
    },
    {
      id: 40,
      title: "The Queen's Gambit",
      year: 2020,
      overview: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.",
      poster_path: "https://image.tmdb.org/t/p/w500/34OGJFEqHX2Yl2NPCm5C9AxlgaQ.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/34OGJFEqHX2Yl2NPCm5C9AxlgaQ.jpg",
      vote_average: 8.6,
      release_date: "2020-10-23",
      runtime: 60,
      genres: ["Drama"],
      director: "Scott Frank, Allan Scott",
      cast: ["Anya Taylor-Joy", "Chloe Pirrie", "Bill Camp"],
      type: "tv"
    },
    {
      id: 41,
      title: "The Terminator",
      year: 1984,
      overview: "In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the 'Terminator' back to 1984 to kill Sarah Connor.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.0,
      release_date: "1984-10-26",
      runtime: 107,
      genres: ["Action", "Sci-Fi"],
      director: "James Cameron",
      cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"],
      type: "movie"
    },
    {
      id: 42,
      title: "Mindhunter",
      year: 2017,
      overview: "In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.6,
      release_date: "2017-10-13",
      runtime: 60,
      genres: ["Crime", "Drama", "Thriller"],
      director: "Joe Penhall",
      cast: ["Jonathan Groff", "Holt McCallany", "Anna Torv"],
      type: "tv"
    },
    {
      id: 43,
      title: "The Princess Bride",
      year: 1987,
      overview: "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.1,
      release_date: "1987-09-25",
      runtime: 98,
      genres: ["Adventure", "Comedy", "Family"],
      director: "Rob Reiner",
      cast: ["Cary Elwes", "Mandy Patinkin", "Robin Wright"],
      type: "movie"
    },
    {
      id: 44,
      title: "The Umbrella Academy",
      year: 2019,
      overview: "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.0,
      release_date: "2019-02-15",
      runtime: 60,
      genres: ["Action", "Adventure", "Comedy"],
      director: "Steve Blackman",
      cast: ["Ellen Page", "Tom Hopper", "David Castañeda"],
      type: "tv"
    },
    {
      id: 45,
      title: "The Grand Budapest Hotel",
      year: 2014,
      overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.1,
      release_date: "2014-03-07",
      runtime: 99,
      genres: ["Comedy", "Drama"],
      director: "Wes Anderson",
      cast: ["Ralph Fiennes", "Tony Revolori", "F. Murray Abraham"],
      type: "movie"
    },
    {
      id: 46,
      title: "The Haunting of Hill House",
      year: 2018,
      overview: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.5,
      release_date: "2018-10-12",
      runtime: 60,
      genres: ["Drama", "Horror", "Mystery"],
      director: "Mike Flanagan",
      cast: ["Michiel Huisman", "Carla Gugino", "Henry Thomas"],
      type: "tv"
    },
    {
      id: 47,
      title: "The Martian",
      year: 2015,
      overview: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.0,
      release_date: "2015-10-02",
      runtime: 144,
      genres: ["Adventure", "Drama", "Sci-Fi"],
      director: "Ridley Scott",
      cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"],
      type: "movie"
    },
    {
      id: 48,
      title: "The Good Place",
      year: 2016,
      overview: "Four people and their otherworldly friar struggle in the afterlife to define what it means to be good.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.2,
      release_date: "2016-09-19",
      runtime: 22,
      genres: ["Comedy", "Drama", "Fantasy"],
      director: "Michael Schur",
      cast: ["Kristen Bell", "William Jackson Harper", "Jameela Jamil"],
      type: "tv"
    },
    {
      id: 49,
      title: "The Revenant",
      year: 2015,
      overview: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      poster_path: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      vote_average: 8.0,
      release_date: "2015-12-25",
      runtime: 156,
      genres: ["Action", "Adventure", "Drama"],
      director: "Alejandro G. Iñárritu",
      cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"],
      type: "movie"
    },
    {
      id: 50,
      title: "The Mandalorian",
      year: 2019,
      overview: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      poster_path: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/9yBVqNruk6YfxthWQNstnJJfIqQ.jpg",
      vote_average: 8.8,
      release_date: "2019-11-12",
      runtime: 40,
      genres: ["Action", "Adventure", "Sci-Fi"],
      director: "Jon Favreau",
      cast: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
      type: "tv"
    }
  ];

  const fetchTrendingMovies = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return sampleMovies.slice(0, 12);
  };

  const fetchPopularMovies = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return sampleMovies.slice(0, 15);
  };

  const fetchTopRatedMovies = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return sampleMovies.slice(0, 12);
  };

  const fetchUpcomingMovies = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return sampleMovies.slice(0, 12);
  };

  const fetchMovieDetails = async (movieId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return sampleMovies.find(movie => movie.id === parseInt(movieId)) || null;
  };

  const searchMovies = async (query) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const lowercaseQuery = query.toLowerCase();
    return sampleMovies.filter(movie => 
      movie.title.toLowerCase().includes(lowercaseQuery) ||
      movie.overview.toLowerCase().includes(lowercaseQuery)
    );
  };

  const searchTrailer = async (movieTitle, year = null) => {
    try {
      const searchQuery = year 
        ? `${movieTitle} ${year} official trailer`
        : `${movieTitle} official trailer`;
      
      const response = await fetch(
        `${YOUTUBE_BASE_URL}/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&videoDuration=medium&maxResults=1&key=${YOUTUBE_API_KEY}`
      );
      
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        const video = data.items[0];
        return {
          id: video.id.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          url: `https://www.youtube.com/watch?v=${video.id.videoId}`
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error searching trailer:', error);
      return null;
    }
  };

  const playTrailer = async (movie) => {
    try {
      const trailerData = await searchTrailer(movie.title, movie.year);
      if (trailerData) {
        setSelectedTrailer(trailerData);
        setShowTrailerPopup(true);
      }
    } catch (error) {
      console.error('Error loading trailer:', error);
    }
  };

  const closeTrailerPopup = () => {
    setShowTrailerPopup(false);
    setSelectedTrailer(null);
  };

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      
      try {
        const [trendingData, popularData, topRatedData, upcomingData] = await Promise.all([
          fetchTrendingMovies(),
          fetchPopularMovies(),
          fetchTopRatedMovies(),
          fetchUpcomingMovies()
        ]);

        setTrending(trendingData);
        setPopular(popularData);
        setTopRated(topRatedData);
        setUpcoming(upcomingData);
      } catch (error) {
        console.error('Error loading movies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const value = {
    trending,
    topRated,
    popular,
    upcoming,
    loading,
    fetchMovieDetails,
    searchMovies,
    playTrailer,
    selectedTrailer,
    showTrailerPopup,
    closeTrailerPopup
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};