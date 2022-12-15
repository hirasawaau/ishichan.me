import * as React from 'react'
import { json, type LoaderFunction, type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import SkillBox from '../components/skill-box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import skills from '../data/skills'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Grid spacing="2">
      <Grid xs={12}>
        <Typography variant="h2">Sila Sonpee</Typography>
      </Grid>
      <Grid
        xs={12}
        sx={{
          marginBottom: '1.5vh',
        }}
      >
        <Typography variant="h4">
          The person who love computer & anime
        </Typography>
      </Grid>
      <Grid
        xs={12}
        sx={{
          marginBottom: '10vh',
        }}
      >
        His name is Sila Sonpee. He is a student at Computer Engineering @
        Kasetsart University. He is interested in Backend Web Development & High
        Performance Computing
      </Grid>

      <Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h3">Skills</Typography>
            <Divider
              sx={{
                marginY: '1.25vh',
              }}
            />
            <Typography variant="h3">Stacks</Typography>
          </Grid>
          <Grid item xs={8}>
            {skills.map((skill) => (
              <div>
                <Typography variant="h5">{skill.head}</Typography>
                <List dense={false}>
                  {skill.items.map((skillItem) => (
                    <ListItem>
                      <ListItemIcon>
                        <CheckBoxIcon />
                      </ListItemIcon>
                      <ListItemText primary={skillItem} />
                    </ListItem>
                  ))}
                  ,
                </List>
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
