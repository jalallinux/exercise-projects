export default function ({ $fire, route, redirect }) {
  if (!$fire.auth.currentUser)
    return redirect('/')
}
