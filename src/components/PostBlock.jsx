import React from 'react';
import { useSelector } from 'react-redux';

import LinesEllipsis from "react-lines-ellipsis";
import moment from "moment";
import Popup from "reactjs-popup";

function PostBlock({ headline, related, image, summary, category, datetime, id, source, url, mark, onClickAddPost, onRemove, latest }) {

    const { items } = useSelector(({ favorite }) => favorite);

    const handleRemoveClick = () => {
        onRemove(id);
    };
  
    const onAddPost = () => {
      const obj = {
        headline,
        related,
        image,
        summary,
        category,
        datetime,
        source,
        url,
        id,
        mark:'true'
      };
      onClickAddPost(obj);
    };
  
    return (
        <div className="news__list-item" style={{backgroundImage: `url(${image})`}}>
            {latest ? 
                <div className="news__list-item_latest">
                    <span>LATEST NEWS</span>
                </div>
            : null }
            <div className="news__list-item_related">
                <span>{related}</span>
            </div>
            <div className="news__list-item_title">
                <div className="news__list-item_summary">
                    <span className="news__list-item_title-text">{headline}</span>
                    <LinesEllipsis
                        text={summary}
                        basedOn="letters"
                        maxLine={2}
                        ellipsis={<span>...</span>}
                        style={{ "overflowWrap": "breakWord", "whiteSpace": "preWrap" }}
                    />
                </div>
            </div>
            <div className="news__list-item_bottom">
                {latest ? 
                    <div className="news__list-item_latestbtn">
                        <button>
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            <span>Read the search</span>
                        </button>
                    </div>
                : null }
                <div className="news__list-item_date">
                    <span>{moment(datetime).format("DD MMM")}</span>
                </div>
                <div className="news__list-item_source">
                    <span>{source}</span>
                </div>
                <div className="news__list-item_buttons">
                    <Popup
                        trigger={<button className="button"> <i className="fa fa-external-link" aria-hidden="true"></i> </button>}
                        modal
                    >
                        {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <div className="content">
                                <div className="modal__item-main" style={{backgroundImage: `url(${image})`}}>
                                    
                                </div>
                                <div className="modal__list-item_related">
                                    <span>{related}</span>
                                </div>
                                <div className="modal__list-item_title">
                                    <span className="modal__list-item_title-text">{headline}</span>
                                </div>
                                <div className="modal__list-item_summary">
                                    <span>{summary}</span>
                                </div>  
                                <div className="modal__list-item_bottom">
                                    <div className="modal__list-item_date">
                                        <span>{moment(datetime).format("DD MMM")}</span>
                                    </div>
                                    <div className="modal__list-item_source">
                                        <span>{source}</span>
                                    </div>
                                    <div className="modal__list-item_buttons">
                                    { items.hasOwnProperty(id) ?
                                            <button 
                                                className="news__list-item_btn"
                                                onClick={handleRemoveClick}
                                            >
                                                <i className="fa fa-bookmark" aria-hidden="true"></i>
                                            </button> :
                                            <button 
                                                className="news__list-item_btn"
                                                onClick={onAddPost}
                                            >
                                                <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                            </button>
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </Popup>
                    { items.hasOwnProperty(id) ?  
                        <button 
                            className="news__list-item_btn"
                            onClick={handleRemoveClick}
                        >
                            <i className="fa fa-bookmark" aria-hidden="true"></i>
                        </button> :
                        <button 
                            className="news__list-item_btn"
                            onClick={onAddPost}
                        >
                            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default PostBlock;
 