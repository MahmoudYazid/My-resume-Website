import React from 'react'
import './file.css'
export default function file() {
  return (
      <button class="button">
          <div class="container">
              <div class="folder folder_one"></div>
              <div class="folder folder_two"></div>
              <div class="folder folder_three"></div>
              <div class="folder folder_four"></div>
          </div>
          <div class="active_line"></div>
          <span class="text">File Explorer</span>
      </button>
  )
}
