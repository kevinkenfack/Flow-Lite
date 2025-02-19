import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import './index.css'

// Pages
import Landing from './pages/Landing.jsx'
import Editor from './pages/Editor.jsx'
import Workspace from './pages/Workspace.jsx'
import View from './pages/View.jsx'
import AllFlows from './pages/AllFlows.jsx'
import GroupFlows from './pages/GroupFlows.jsx'

// Documentation
import Main from './pages/Documentation/Main.jsx'
import Introduction from './pages/Documentation/Introduction.jsx'
import Package from './pages/Documentation/Package.jsx'
import Installation from './pages/Documentation/Installation.jsx'
import Database from './pages/Documentation/Database.jsx'
import Flows from './pages/Documentation/Flows.jsx'
import Groups from './pages/Documentation/Groups.jsx'
import EditorUI from './pages/Documentation/EditorUI.jsx'
import AddNode from './pages/Documentation/AddNode.jsx'
import AddEdge from './pages/Documentation/AddEdge.jsx'
import AddText from './pages/Documentation/AddText.jsx'
import EditNode from './pages/Documentation/EditNode.jsx'
import EditEdge from './pages/Documentation/EditEdge.jsx'
import Preview from './pages/Documentation/Preview.jsx'
import Support from './pages/Documentation/Support.jsx'
import ChangeLog from './pages/Documentation/ChangeLog.jsx'

// Error page
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: "/workspace",
    element: <Workspace />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        loader: () => redirect('/workspace/all'),
      },
      {
        path: "all",
        element: <AllFlows />,
        errorElement: <ErrorPage />,
      },
      {
        path: "group/:groupId",
        element: <GroupFlows />,
        errorElement: <ErrorPage />,
      },
      {
        path: "documentation",
        element: <Main />,
        children: [
          {
            index: true,
            loader: () => redirect('introduction'),
          },
          {
            path: "introduction",
            element: <Introduction />,
          },
          {
            path: "package",
            element: <Package />,
          },
          {
            path: "installation",
            element: <Installation />,
          },
          {
            path: "database",
            element: <Database />,
          },
          {
            path: "flows",
            element: <Flows />,
          },
          {
            path: "groups",
            element: <Groups />,
          },
          {
            path: "editorui",
            element: <EditorUI />,
          },
          {
            path: "addnode",
            element: <AddNode />,
          },
          {
            path: "addedge",
            element: <AddEdge />,
          },
          {
            path: "addtext",
            element: <AddText />,
          },
          {
            path: "editnode",
            element: <EditNode />,
          },
          {
            path: "editedge",
            element: <EditEdge />,
          },
          {
            path: "preview",
            element: <Preview />,
          },
          {
            path: "support",
            element: <Support />,
          },
          {
            path: "changelog",
            element: <ChangeLog />,
          }
        ]
      }
    ]
  },
  {
    path: "/editor/:flowId",
    element: <Editor />,
    errorElement: <ErrorPage />
  },
  {
    path: "/v/:flowId",
    element: <View />,
    errorElement: <ErrorPage />
  }
], {
  // If you upload to subfolder in your server uncomment this line and edit basename
  // basename: "/flowlite"
  })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
