import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import { Form, InputGroup } from 'react-bootstrap';

const Products = () => {
  const [product, setPopular] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setPopular(json);
      });
  }, []);

  const selectPageHandler = selectedPage => {
    if (
      selectedPage >= 1 &&
      selectedPage <= product.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <section>
      <InputGroup className="my-3">
        <Form.Control
          onChange={e => setSearch(e.target.value)}
          placeholder="Search.... "
        />
      </InputGroup>
      <div className="row">
        {product
          .slice(page * 8 - 8, page * 8)
          .filter(result => {
            return search.toLowerCase() === ''
              ? result
              : result.title.toLowerCase().includes(search) ||
                  result.category.toLowerCase().includes(search);
          })
          .map(result => {
            return (
              <>
                <div className="col-lg-3 product">
                  <div className="card card-margin" key={result.id}>
                    <div className="card-header no-border">
                      <small>
                        <h5 className="card-title">{result.category}</h5>
                      </small>
                    </div>
                    <div className="product_img">
                      <img src={result.image} alt={result.title} />
                    </div>
                    <div className="card-body pt-0">
                      <div className="widget-49">
                        <div className="widget-49-title-wrapper">
                          <div className="widget-49-date-primary">
                            <span className="widget-49-date-day">
                              {result.rating.rate}
                            </span>
                            <span className="widget-49-date-month">⭐</span>
                          </div>
                          <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title product_title">
                              <b>{result.title}</b>
                            </span>
                            <span className="widget-49-meeting-time">
                              ${result.price}
                            </span>
                          </div>
                        </div>
                        <div className="product_description">
                          <small>{result.description}</small>
                        </div>

                        <div className="widget-49-meeting-action">
                          <Link
                            to={'/productdetail/' + result.id}
                            href="#"
                            className="btn btn-sm btn-flash-border-primary buy_now"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      {/* button */}
      {product.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? '' : 'pagination__disable'}
          >
            ◀
          </span>
          {[...Array(product.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? 'pagination__selected' : ''}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < product.length / 10 ? '' : 'pagination__disable'}
          >
            ▶
          </span>
        </div>
      )}
    </section>
  );
};

export default Products;
