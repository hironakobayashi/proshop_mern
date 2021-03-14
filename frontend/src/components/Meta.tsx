import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title?: string
  description?: string
  keywords?: string
}

const Meta = ({
  title = 'Welcome To ProShop',
  description = 'We sell the best products for cheap',
  keywords = 'electronics, buy electronics, cheap',
}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}

export default Meta
