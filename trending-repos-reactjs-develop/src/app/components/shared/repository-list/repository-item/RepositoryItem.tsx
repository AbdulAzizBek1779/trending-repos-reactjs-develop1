import * as React from 'react';
import './RepositoryItem.scss';
import { IRepository } from '../../../../interfaces/repository.interface';

interface IProps {
  repository: IRepository;
  onFavorite: (id: number) => void;
  onUnfavorite: (id: number) => void;
}

export const RepositoryItem = ({ repository, onFavorite, onUnfavorite }: IProps) => {

  const description = repository.description || 'No description is provided...';
  const actionText = repository.favorite ? 'Remove from the favorites' : 'Add to the favorites';

  return (
    <article className="repository">
      <section className="repository__info">
        <p>
          <strong><i className="fa-solid fa-box-open" /> Ismi:</strong>{' '}
          <a href={repository.html_url}>
            {repository.name}
          </a>
        </p>
        <p>
          <strong><i className="fa-solid fa-star" /> Yulduzlar: </strong>{' '}
          {repository.stargazers_count}
        </p>
      </section>
      <section className="repository__description">
        <p>{description}</p>
        <button
          aria-label={actionText}
          data-tooltip={actionText}
          className={repository.favorite ? '' : 'outline'}
          onClick={repository.favorite ? onUnfavorite.bind(null, repository.id) : onFavorite.bind(null, repository.id)}
        >
          <i className="fa fa-heart" />
        </button>
      </section>
    </article>
  );
};
