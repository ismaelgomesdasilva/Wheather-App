import styled from 'styled-components'

export const Container = styled.div`
  max-width: 18.75rem;
  margin-bottom: 1.25rem;
`

export const Stats = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 2.125rem;
    font-weight: var(--normal);
    font-size: var(--normal-font-size);
    color: var(--text-grey-color);
  }

  h2 {
    font-weight: var(--bold);
    font-size: var(--bigger-font-size);
  }

  @media (max-width: 530px) {
    h2 {
      font-weight: var(--bold);
      font-size: var(--big-font-size);
    }
  }
`
export const ImageAling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.0625rem;
  gap: 1.25rem;
`
export const Footer = styled.div`
  margin-top: 6.25rem;
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  text-align: center;

  h3,
  p {
    font-weight: var(--normal);
    font-size: var(--normal-font-size);
  }

  h3 {
    color: var(--text-grey-color);
  }

  p {
    color: var(--text-black-color);
  }
`
