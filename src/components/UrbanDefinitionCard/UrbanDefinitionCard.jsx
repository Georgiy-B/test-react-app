import React from 'react';
import { Link } from 'react-router-dom';
import './UrbanDefinitionCard.css';

function putLinkForUrbanLine(line) {
  let matches = line.match(/(\[.*?\])/g);
  let splits = line.split(/\[.*?\]/);
  let res = [];

  for (let i = 0; i < splits.length; i++) {
    res.push(splits[i]);

    if (matches && i < matches.length) {
      let term = matches[i].slice(1, -1);
      let link = <Link key={i} to={`/urban?term=${term}`}>{term}</Link>;
      res.push(link);
    }
  }
  return res;
}

function putLinksForUrbanText(text) {
  let res = [];

  let lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '') continue;
    
    let p = <p key={i}>{putLinkForUrbanLine(lines[i])}</p>;
    res.push(p);
  }

  return res;
}

function UrbanDefinitionCard({ definition, className }) {
  let date = new Date(definition.written_on).toDateString();
  return (
    <div className={`urban-def-card ${className || ''}`}>
      <Link
        className="term"
        to={`/urban?term=${definition.word}`}
      >
        {definition.word}
      </Link>
      <div className="definition">
        {putLinksForUrbanText(definition.definition)}
      </div>
      <div className="examples">
        <p>
          {putLinksForUrbanText(definition.example)}
        </p>
      </div>
      <div className="author">
        By &nbsp;
        <Link to={`https://www.urbandictionary.com/author.php?author=${definition.author}`}>
          {definition.author}
        </Link>
        &nbsp;{date}
      </div>
      <div className="rating">
        <span className="likes">
          <img src={`${process.env.PUBLIC_URL}/img/like.png`} alt="Likes"/>
          {definition.thumbs_up}
        </span>
        <span className="dislikes">
          <img src={`${process.env.PUBLIC_URL}/img/dislike.png`} alt="Dislikes"/>
          {definition.thumbs_down}
        </span>
      </div>
    </div>
  );
}

// author: "Sauha_"
// current_vote: ""
// defid: 13961723
// definition: "[Malding] is a condition originating from Uganda, where the patient zero was found (circa) 1990. It is often described as the human version of molding. Certain tobacco products like [Snus] are said to enhance the effects of [malding].↵↵It is characterized by the victims baldness, lack of skill and anger issues. Subjects of the condition are also said to have decorated their room with self portraits and paintings of things that make them feel uneasy."
// example: ""so [mald], so bald"↵↵"Why doesnt he [back off] when i hit him twice? Fucking [RNG] man""
// permalink: "http://mald.urbanup.com/13961723"
// sound_urls: []
// thumbs_down: 15
// thumbs_up: 1354
// word: "Mald"
// written_on: "2019-06-04T00:00:00.000Z"

export default UrbanDefinitionCard;