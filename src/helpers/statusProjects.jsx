import React from 'react'
export const statusproject = (status) => {
    let icons = {1: '<i class="fa-solid fa-arrow-right"></i>', 2: '<i class="fa-solid fa-ban"></i>',3: '<i class="fa-solid fa-check-to-slot"></i>' }

      return (
        <React.Fragment>
          <div dangerouslySetInnerHTML={{ __html: icons[status] }} />
        </React.Fragment>
      )
  }